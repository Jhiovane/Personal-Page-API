import React, { Component,Fragment } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class EditPortfolio extends Component {

    state = {
        portfolio: [{
            name:"",
            description:"",
            image_url:"",
            createdAt:""
        }],
        valueInputName:"",
        indexPort:-1,
        valueInputDescription:"",
        valueInputImageURL:"",
        valueInputData:""
      };
    handleValueInputNameChange = event => {
      this.setState({ valueInputName: event.target.value })
  };
  handleValueInputDescriptionChange = event => {
    this.setState({ valueInputDescription: event.target.value })
};
handleValueInputImageChange = event => {
    this.setState({ valueInputImageURL: event.target.value })
};
handleValueInputDataChange = event => {
    this.setState({ valueInputData: event.target.value })
};
  savePort = async (port,index) => {
    console.log(port)
    console.log(index)
    if(this.state.valueInputName != "" && index == this.state.indexPort){
      console.log(this.state.valueInputName)
      console.log(index)
        port.name = this.state.valueInputName;
        this.setState({valueInputName: ""})
    }
    
    if(this.state.valueInputDescription != "" && index == this.state.indexPort){
        port.description = this.state.valueInputDescription;
        this.setState({valueInputDescription: ""})
    }
    if(this.state.valueInputImageURL != "" && index == this.state.indexPort){
        port.image_url = this.state.valueInputImageURL;
        this.setState({valueInputImageURL: ""})
    }
    if(this.state.valueInputData != "" && index == this.state.indexPort){
        port.createdAt = this.state.valueInputData;
        this.setState({valueInputData: ""})
    }
    await axios.put(`http://localhost:9999/api/portfolio/${port._id}`,
        {
          name: port.name,
          description : port.description,
          image_url: port.image_url,
          createdAt: port.createdAt,
          crossDomain: true
        }
      );
      this.loadPorts();
  };

      componentDidMount() {
        this.loadPorts();
      }
      loadPorts = async () => {
        const response = await axios.get("http://localhost:9999/api/portfolio", {
          crossDomain: true
        });
        this.setState({
          portfolio: response.data,
        });
      };
      addport = async () => {
        await axios.post("http://localhost:9999/api/portfolio",
            {  
              name: "Novo projeto",
              description:"Nova Descrição",
              crossDomain: true
            }
          );
          this.loadPorts();
      };
      deletePort = async (port) => {
         await axios.delete(`http://localhost:9999/api/portfolio/${port._id}`,
            {
              crossDomain: true
            }
          );
          this.loadPorts();
      };
      
    render() {
        return (
        <Fragment>
            <h2>PORTFOLIO</h2>
        <div id="edit-port">
           <div class="ports">
            <ul>
               {this.state.portfolio.map((itens,index) => {
                   return(
                      <li>
                        <form>
                          <div className="inputs">
                          <div className="input-port">
                            <label>Nome</label>
                            <input  class="input-info" type="text" placeholder={itens.name} 
                            onChange={this.handleValueInputNameChange} 
                            onBlur={() => {this.setState({indexPort:index})}}>
                            </input>
                          </div>
                          <div className="input-port">
                            <label>Descrição</label>
                            <textarea type="text" class="input-description" placeholder={itens.description}
                            onChange={this.handleValueInputDescriptionChange} 
                            onBlur={() => {this.setState({indexPort:index})}}>
                            </textarea>
                         </div>
                         <div className="input-port">
                            <label>URL Imagem</label>
                            <input type="url" class="input-info" placeholder={itens.image_url}
                            onChange={this.handleValueInputImageChange} 
                            onBlur={() => {this.setState({indexPort:index})}}>
                            </input>
                         </div>
                         <div className="input-port">
                            <label>Data</label>
                            <input type="date" class="input-date" placeholder={itens.createdAt}
                            onChange={this.handleValueInputDataChange} 
                            onBlur={() => {this.setState({indexPort:index})}}>
                            </input>
                         </div>
                         </div>
                         <div className="buttons">
                          <button type='reset' onClick={() => { this.savePort(itens,index)}}>Salvar</button>
                          <button type='reset' onClick={() => { this.deletePort(itens)}}>Excluir</button>
                        </div>
                        </form>
                    </li>
                   )
               })}
               </ul>
           </div>
           <div class="btns">
            <Button onClick={() => {this.addport()}}>Adicionar Projeto</Button>
           </div>
           
        </div>
        </Fragment>
        ) ;
    }
}
export default EditPortfolio;