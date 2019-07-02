import React, { Component,Fragment } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class Editskill extends Component {

    state = {
        skills: [{
            title:"",
            nivel:"",
        }],
        valueInputTitle:"",
        indexSkill:-1,
        valueInputNivel:0
      };
    handleValueInputTitleChange = event => {
      this.setState({ valueInputTitle: event.target.value })
  };
  handleValueInputNivelChange = event => {
    this.setState({ valueInputNivel: event.target.value })
};
  saveSkill = async (skill,index) => {
    console.log(index)
    console.log(this.state.indexSkill)
    if(this.state.valueInputTitle != "" && index == this.state.indexSkill){
        skill.title = this.state.valueInputTitle;
        this.setState({valueInputTitle: ""})
    }
    
    if(this.state.valueInputNivel != 0 && index == this.state.indexSkill){
        if(this.state.valueInputNivel > 100)
            skill.nivel = 100;
        else if (this.state.valueInputNivel < 0)
            skill.nivel = 0;
        else
            skill.nivel = this.state.valueInputNivel;

        this.setState({valueInputNivel: 0})
    }
    await axios.put(`http://localhost:9999/api/skill/${skill._id}`,
        {
          title: skill.title,nivel : skill.nivel,
          crossDomain: true
        }
      );
      this.loadSkills();
  };

      componentDidMount() {
        this.loadSkills();
      }
      loadSkills = async () => {
        const response = await axios.get("http://localhost:9999/api/skill", {
          crossDomain: true
        });
        this.setState({
          skills: response.data,
        });
      };
      addSkill = async () => {
        await axios.post("http://localhost:9999/api/skill",
            {  
              title: "New Skill",nivel:10,
              crossDomain: true
            }
          );
          this.loadSkills();
      };
      deleteSkill = async (skill) => {
         await axios.delete(`http://localhost:9999/api/skill/${skill._id}`,
            {
              crossDomain: true
            }
          );
          this.loadSkills();
      };
      
    render() {
        return (
        <Fragment>
            <h2>SKILLS</h2>
        <div id="edit-skill">
           <div class="skills">
            <ul>
               {this.state.skills.map((itens,index) => {
                   return(
                      <li>
                        <form>
                        <label>Name</label>
                        <input  class="input-info" type="text" placeholder={itens.title} 
                        onChange={this.handleValueInputTitleChange} onBlur={() => {this.setState({indexSkill:index})}}></input>
                        <label>Nível</label>
                        <input type="number" min='1' max='100' class="input-numb" placeholder={itens.nivel}
                         onChange={this.handleValueInputNivelChange} onBlur={() => {this.setState({indexSkill:index})}}></input>
                        <button type='reset' onClick={() => { this.saveSkill(itens,index)}}>Salvar</button>
                        <button onClick={() => { this.deleteSkill(itens)}}>Excluir</button>
                        </form>
                    </li>
                   )
               })}
               </ul>
           </div>
           <div class="btns">
            <Button onClick={() => {this.addSkill()}}>Adicionar Skill</Button>
           </div>
           
        </div>
        </Fragment>
        ) ;
    }
}
export default Editskill;