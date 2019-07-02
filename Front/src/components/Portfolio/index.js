import React, { Component } from "react";
import sgbs from "../../assets/sgbs.png";
import monitora from "../../assets/monitora.png";
import pill from "../../assets/pill.png";
import truco from "../../assets/truco.PNG";
import geovanna from "../../assets/geovanna.PNG";
import axios from "axios";
import "./styles.css";

class Portfolio extends Component {
    state = {
        portfolio: [{
            name:"",
            description:"",
            image_url:""
        }]
      };
      componentDidMount() {
        this.loadInfos();
      }
      loadInfos = async () => {
        const response = await axios.get("http://localhost:9999/api/portfolio", {
          crossDomain: true
        });
        this.setState({
          portfolio: response.data
        });
      };
    render() {
        return(
            <div id="portfolio">
                <div class="title">
                    <h2>PORTFOLIO</h2>
                    <p>Alguns dos projetos que já desenvolvi</p>
                </div>
                <div class="mini">
                    {this.state.portfolio.map(item => {
                            return (
                                <img src={item.image_url} id={item.name} alt={item.description} title={item.description}></img>
                            )
                        })
                        }  
                </div>
                <div class="more">
                    <a href="https://github.com/Jhiovane" target="_blank">
                        <div class="icon github"></div></a>
                    <h3>GITHUB</h3>
                </div>

            </div>
            );
    }
}
export default Portfolio;