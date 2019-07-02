import React, { Component } from "react";
import logo from "../../assets/logo3.png";
import "./styles.css";

class Menu extends Component {
  render() {
    return (<header id="menu">     
        <ul>
            <li>
                <img id="logo-menu"src={logo}/>
            </li>
            <li>
                <a href="#">HOME</a>
            </li>
            <li>
                <a href="#perfil">PERFIL</a>
            </li>
            <li>
                <a href="#skills">SKILLS</a>
            </li>
            <li>
                <a href="#blog">BLOG</a>
            </li>
            <li> 
                <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
                <a href="#info">INFO</a>
            </li>
            <li>
                <a href="#contact">CONTATO</a>
            </li>
        </ul>
    </header>);
  }
}

export default Menu;