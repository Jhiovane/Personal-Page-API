import React, { Component } from "react";
import {Bar} from "../Bar";
import axios from "axios";
import "./styles.css";

class Perfil extends Component {
    state = {
        skill: [{
            title:"",
            nivel:10
        }]
      };
      componentDidMount() {
        this.loadInfos();
      }
      loadInfos = async () => {
        const response = await axios.get("http://localhost:9999/api/skill", {
          crossDomain: true
        });
        this.setState({
          skill: response.data
        });
      };
    render() {
        return(
            <div id="skills">
                <div class="head">
                    <h2>SKILLS</h2>
                </div>
                <div class="abilities">
                    <ul>
                    {this.state.skill.map(item => {
                        return (
                            <li>
                                <p>{item.title}</p>
                                <Bar nivel={item.nivel}></Bar>
                            </li>

                        )
                    })
                    }
              
                    </ul>
                </div>


            </div>

        );
    }
}
export default Perfil;