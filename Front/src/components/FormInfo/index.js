import React, { Component } from "react";
import Button from "../Button";
import axios from "axios";
import "./styles.css";

class FormInfo extends Component {
    
    state = {
        infos: []
      };
      handleSubmit = ( event ) => { 
        event.preventDefault (); 
      }
      handleTitleChange = ( event ) => { 
        this.setState ({name: event.target.value}); 
        } 
    render() {
        return(
            <form onSubmit = {this.handleSubmit}> 
                <div className = "Formulários">  
                    <input name = "title" className = "formulário" 
                    id = "name" placeholder = "Titulo" 
                    value = {this.state.title} 
                    onChange = {this.handleTitleChange} /> 
                </ div> 
                <button type = "submit" 
                className = "btn btn-sucesso btn-block"> Enviar </ button> 
            </ form> 
            
        );
    
    }    

}

export default FormInfo;