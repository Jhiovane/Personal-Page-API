import React, { Component,Fragment } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class Perfil extends Component {

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
        }]
      };
      componentDidMount() {
        this.loadInfos();
      }
      loadInfos = async () => {
        const response = await axios.get("http://localhost:9999/api/perfil", {
          crossDomain: true
        });
        this.setState({
          perfil: response.data
        });
      };
      
    render() {
        

        return (
        <Fragment>
        <div id="perfil">
            <div class="description">
                <div class="description name">
                    <h2>{this.state.perfil[0].name}</h2>
                </div>
                <div class="description interest">
                        {(this.state.perfil[0].infos.length && this.state.perfil[0].infos.map(item => {
                            return (
                                <div class="interest">
                                    <div class="des">
                                        <div class={item.class}></div>
                                        <h4>{item.title}</h4>
                                    </div>
                                        <ul>
                                            {item.descriptions.map(elemen => {
                                                return (
                                                    <li>
                                                        {elemen}
                                                    </li>

                                                )
                                            })
                                        } 
                                        </ul>    
                               </div>     
                            );
                        })) || <p>Carregando...</p> }

                </div>
            </div>
            <div class="perfil image">
                <img src={this.state.perfil[0].image} id="image-perfil" alt="perfil"></img>
                <div class="bt">
                    <a href="https://github.com/Jhiovane/dctb-utfpr-2019-1-web/raw/master/as34a-n14/t02/jhiovane-pinheiro/curriculo.pdf"><Button>CURRICULO</Button></a>
                </div>
            </div> 
        </div>
        </Fragment>
        ) ;
    }
}
export default Perfil;