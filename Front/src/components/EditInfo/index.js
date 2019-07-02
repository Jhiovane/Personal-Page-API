import React, { Component,Fragment } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class EditInfo extends Component {

    state = {
        infos: [{
            title:"",
            class_icon:"",
            itens: [
                {
                    title:"",
                    description:""
                }
            ]
        }],
        valueInputTitle:"",
        indexinfos:-1,
        valueInputIcon:"",
        valueInputItemTit:"",
        valueInputItemDes:"",
        valueItens:[]
      };
    handleValueInputTitleChange = event => {
      
      this.setState({ valueInputTitle: event.target.value })
  };
  handleValueInputIconChange = event => {
    this.setState({ valueInputIcon: event.target.value })
};
handleValueInputItemTitChange = event => {
    this.setState({ valueInputItemTit: event.target.value })
};
handleValueInputItemDesChange = event => {
    this.setState({ valueInputItemDes: event.target.value })
};
attItensInfo = async (index,des_index) => {
  if(this.state.valueItens.length == 0){
    var aux = JSON.parse(JSON.stringify(this.state.infos[index].itens));
    await this.setState({valueItens: aux.slice()});
  }
  var aux2 = this.state.valueItens;
  if(this.state.valueInputItemTit != ""){
    aux2[des_index].title = this.state.valueInputItemTit;
    this.setState({valueInputItemTit: ""})
}
if(this.state.valueInputItemDes != ""){
  aux2[des_index].description = this.state.valueInputItemDes;
  this.setState({valueInputItemDes: ""})
  
}
console.log(this.state.valueItens);
this.setState({indexinfos: index});
  
};
  saveInfos = async (infos,index) => {
    if(this.state.valueInputTitle != "" && index == this.state.indexinfos){
        infos.title = this.state.valueInputTitle;
        this.setState({valueInputTitle: ""})
    }
    if(this.state.valueInputIcon != "" && index == this.state.indexinfos){
        infos.class_icon = this.state.valueInputIcon;
        this.setState({valueInputIcon: ""})
    }
    if(this.state.valueItens.length != 0 && index == this.state.indexinfos){
       infos.itens = this.state.valueItens;
       this.setState({valueItens: []}) 
    }

    await axios.put(`http://localhost:9999/api/infos/${infos._id}`,
        {
          title: infos.title,
          class_icon : infos.class_icon,
          itens: infos.itens,
          crossDomain: true
        }
      );
      this.loadInfos();
  };

      componentDidMount() {
        this.loadInfos();
      }
      loadInfos = async () => {
        const response = await axios.get("http://localhost:9999/api/infos", {
          crossDomain: true
        });
        this.setState({
          infos: response.data,
        });
      };
      addInfos = async () => {
        await axios.post("http://localhost:9999/api/infos",
            {  
              title: "New infos",
              crossDomain: true
            }
          );
          this.loadInfos();
      };
      addItens = async (info) => {
        console.log(info)
        var aux = info.itens;
        console.log(aux);
        aux.push({title:"new Title",description:"new description"});
        console.log(aux);
        await axios.put(`http://localhost:9999/api/infos/${info._id}`,
            {
                itens: info.itens,
              crossDomain: true
            }
          );
          this.loadInfos();
      };
      deleteInfos = async (infos) => {
         await axios.delete(`http://localhost:9999/api/infos/${infos._id}`,
            {
              crossDomain: true
            }
          );
          this.loadInfos();
      };
      deleteItens = async (item,des_index) => {
        var aux = item.itens;
        aux.splice(des_index,1);       
         await axios.put(`http://localhost:9999/api/infos/${item._id}`,
            {
                itens: aux,
              crossDomain: true
            }
          );
          if(this.state.valueItens.length != 0){
            const aux2 = this.state.valueItens;
            aux2.splice(des_index,1);
          } 
          this.loadInfos();
      }
      
    render() {
        return (
        <Fragment>
            <h2>INFOS</h2>
        <div id="edit-infos">
           <div class="infos">
            <ul>
               {this.state.infos.map((item,index) => {
                   return(
                     <div class="container-info">
                      <li>
                        
                            <label>Titulo</label>
                            <input  class="input-info" type="text" placeholder={item.title} 
                                onChange={this.handleValueInputTitleChange} 
                                onBlur={() => {this.setState({indexinfos:index})}}></input>
                            <label>Icone</label>
                            <select name="icons" onChange={this.handleValueInputIconChange}
                             onBlur={() => {this.setState({indexinfos:index})}}>
                                <option value="icon normal" selected >Normal</option>
                                <option value="icon edu">Educação</option>
                                <option value="icon experience">Trabalho</option>
                              </select>
                            <button onClick={() => {this.addItens(item)}} 
                           >Add Tópico</button>
                            <ul>
                                {item.itens.map((subItem,des_index) => {
                                    return(
                                       <li>
                                         <div className="input-itens">
                                           <input class="input-item" type="text" placeholder={subItem.title} 
                                            onChange={this.handleValueInputItemTitChange} 
                                            onBlur={() => {this.attItensInfo(index,des_index)}}>
                                           </input>
                                           <textarea class="input-item"  placeholder={subItem.description} 
                                            onChange={this.handleValueInputItemDesChange} 
                                            onBlur={() => {this.attItensInfo(index,des_index)}}>
                                           </textarea>
                                            <button  
                                            onClick={() => {this.deleteItens(item,des_index)}}
                                            >Excluir</button>
                                          </div>  
                                       </li> 
                                    );
                                })}
                            </ul>
                            <button type='reset' onClick={() => { this.saveInfos(item,index)}}>Salvar</button>
                            <button type='reset' onClick={() => { this.deleteInfos(item)}}>Excluir</button>
                        
                    </li>
                    </div>
                   )
               })}
               </ul>
           </div>
           <div class="btns">
            <Button onClick={() => {this.addInfos()}}>Adicionar Informação</Button>
           </div>
           
        </div>
        </Fragment>
        ) ;
    }
}
export default EditInfo;