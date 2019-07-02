import React, { Component,Fragment } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class EditPerfil extends Component {

    state = {
        perfil: [{
            name:"",
            image:"",
            infos: [
                {
                    title:"",
                    class:"",
                    descriptions:[]
                }
            ]
        }],
        valueInputName: "",
        valueInput:"",
        valueInfo: [],
        imageUrl:""
      };

    handleValueNameInputChange = event => {
        this.setState({ valueInputName: event.target.value })  
    };
    handleValueImageInputChange = event => {
      this.setState({ imageUrl: event.target.value })  
  };
    handleValueInfoInputChange = event => {
      console.log(event.target.value)
      this.setState({ valueInput: event.target.value })
    };
    handleValueInfoInputBlur = index => {
      var aux = this.state.valueInfo
      aux[index].title = this.state.valueInput;
    };
    handleValueIconInputBlur = index => {
      console.log("aq");
      var aux = this.state.valueInfo;
      console.log(aux)
      aux[index].class = this.state.valueInput;
    }
    handleValueDescInputBlur = (index,des_index) => {
      var aux = this.state.valueInfo
      aux[index].descriptions[des_index] = this.state.valueInput;
    };
    
    componentDidMount() {
      this.loadInfos();
    }
      loadInfos = async () => {
      const response = await axios.get("http://localhost:9999/api/perfil", {
        crossDomain: true
      });
      this.setState({
        perfil: response.data,
      });
      
        if(this.state.valueInfo.length == 0){
          var aux = JSON.parse(JSON.stringify(this.state.perfil[0].infos));
          this.setState({valueInfo: aux.slice()})
        }
      };
      saveInfos = async () => {
        const perfil = this.state.perfil[0];
        if(this.state.valueInputName != "")
          perfil.name = this.state.valueInputName
        if(this.state.imageUrl != "")
          perfil.image = this.state.imageUrl
        await axios.put(`http://localhost:9999/api/perfil/${perfil._id}`,
            {
              name: perfil.name,
              image: perfil.image,
              infos: this.state.valueInfo,
              crossDomain: true
            }
          );
          this.loadInfos();
      };
      deleteDescInfo = async (perfil,des_index,index) => {
        var aux = perfil.infos[index].descriptions;

        aux.splice(des_index,1);

        await axios.put(`http://localhost:9999/api/perfil/${perfil._id}`,
        {
            infos: perfil.infos,
          crossDomain: true
        }
      );
      const aux2 = this.state.valueInfo[index].descriptions;
      aux2.splice(des_index,1);
      this.loadInfos();

      };
      addInfo = async (perfil) => {
        var aux = perfil.infos;
        aux.push({title:""});
        await axios.put(`http://localhost:9999/api/perfil/${perfil._id}`,
            {
                infos: perfil.infos,
              crossDomain: true
            }
          );
          const aux2 = this.state.valueInfo
          aux2.push({title:"",descriptions:[]});
          this.loadInfos();
      };
      addDescInfo = async (perfil,index) => {
        
        var aux = perfil.infos[index].descriptions;
        aux.push("");
        await axios.put(`http://localhost:9999/api/perfil/${perfil._id}`,
            {
                infos: perfil.infos,
              crossDomain: true
            }
          );
          const aux2 = this.state.valueInfo[index].descriptions
          aux2.push("");
          this.loadInfos();
      };
      deleteInfo = async (perfil,index) => {
        var aux = perfil.infos;
        aux.splice(index,1);       
         await axios.put(`http://localhost:9999/api/perfil/${perfil._id}`,
            {
                infos: aux,
              crossDomain: true
            }
          ); 
          const aux2 = this.state.valueInfo;
          aux2.splice(index,1);
          this.loadInfos();
      };
      
      
    render() {
        return (
        <Fragment>
            <h2>PERFIL</h2>
        <div id="edit-perfil">
        <form>
        <div class="container-edit">

        
          <div class="edit-infos">
           <div class="input">
                <p>Nome</p>
                <input type="text" placeholder={this.state.perfil[0].name} 
                onChange={this.handleValueNameInputChange}></input>
           </div>
           <div class="label-info">
              <p>Informações</p>
             </div>
           <div class="infos">
             
           
               {this.state.perfil[0].infos.map((itens,index) => {
                   return(
                     
                       <div className="info-profile">
                           <input  class="input-title" type="text" placeholder={itens.title}
                              onChange={this.handleValueInfoInputChange} 
                              onBlur={() =>{this.handleValueInfoInputBlur(index)}}>
                            </input>
                            <select name="icons" onChange={this.handleValueInfoInputChange}
                            selected={itens.class}
                             onBlur={() => {this.handleValueIconInputBlur(index)}}>
                                <option value="icon interesting" selected>Normal</option>
                                <option value="icon study">Educação</option>
                                <option value="icon home">Casa</option>
                                <option value="icon local">Lugar</option>
                              </select>
                           <button type="button"
                           onClick={() => { this.deleteInfo(this.state.perfil[0],index)}}
                           >Excluir</button>
                           <button type='button'
                           onClick={() => { this.addDescInfo(this.state.perfil[0],index)}}
                           >Add Tópico</button>
                          <ul>
                               {itens.descriptions.map((elemen,des_index) => {
                                    return(
                                        <li>
                                            <input type="text" placeholder={elemen}
                                              onChange={this.handleValueInfoInputChange} 
                                              onBlur={() =>{this.handleValueDescInputBlur(index,des_index)}}>
                                            </input>
                                            <button type='button'
                                            onClick={() => { this.deleteDescInfo(this.state.perfil[0],des_index,index)}}
                                            >Excluir</button>
                                        </li>
                                    ) 
                               })}
                           </ul>
                
                       </div>
                       
                   )
               })}
            </div>
            
           </div>
           <div className="edit-photo">
        
            <img src={this.state.perfil[0].image} id="image-perfil" alt="perfil"></img>
            <label>Insira uma nova URL de imagem para alterar</label>
              <input type="url" placeholder={this.state.perfil[0].image} 
                onChange={this.handleValueImageInputChange}></input>
        
        
          </div> 
          </div>
          <div class="btns">
              <Button type='button' onClick={() => {this.addInfo(this.state.perfil[0])}}>Adicionar Informação</Button>
              <Button onClick={() => {this.saveInfos(this.state.perfil[0])}} type='button'>Salvar</Button>
            </div>
            </form>
        </div>
        </Fragment>
        ) ;
    }
}
export default EditPerfil;