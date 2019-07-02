import React, { Component,Fragment } from "react";
import axios from "axios";
import "./styles.css";

class Info extends Component {
    state = {
        infos: []
      };
    loadInfos = async () => {
        const response = await axios.get("http://localhost:9999/api/infos", {
          crossDomain: true
        });
        this.setState({
          infos: response.data
        });
      };
      componentDidMount() {
        this.loadInfos();
      }
    render() {

        return(
        <Fragment>
        <div id="info">
            <div class="name">
                <h2>Mais informações</h2>
            </div>
            <div class="about">
                {this.state.infos.map(item => {
                    return(
                        <div class="column">
                            <div class="des">
                                <div class={item.class_icon}></div>
                                <h4>{item.title}</h4>
                            </div>
                            <ul>
                                {item.itens.map(elemen => {
                                    return(
                                        <li>
                                            <h5>{elemen.title}</h5>
                                            <p>{elemen.description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                    </div>);
                })}
                
            </div>
        </div>
        </Fragment>);
        
    }
}
export default Info;