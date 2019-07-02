import React, { Component } from "react";
import Button from "../Button";
import "./styles.css";

class Contact extends Component {
    render() {

        return(
        <div id="contact">
            <div class="text">
                <h3>Entre em contato comigo!</h3>
            </div>
             <form class="form" action="https://formspree.io/jiovane_alexsander@hotmail.com" method="POST">
                <input  type="text"  placeholder="Nome" name="name" />
                <input type="text"  placeholder="E-mail" name="email" />
                <input type="text"  placeholder="Assunto" name="assunt" />
                <textarea placeholder="Mensagem" name="message"></textarea>
                <Button type="submit">Enviar</Button>
            </form>
            <div class="text">
                
                <h4>Redes sociais</h4>
                <div class="social network">
                    <a href="https://www.instagram.com/jhiovanealexsander/" target="_blank">
                        <div class="icon insta" ></div>
                    </a>
                    <a href="https://www.linkedin.com/in/jhiovane-pinheiro-860425151/" target="_blank" >
                        <div class="icon linkedin"></div>
                    </a>
                    <a href="https://www.facebook.com/jiovane.alexsander"  target="_blank">
                        <div class="icon face"></div>
                    </a>
                </div> 
                <p>(15) 997825169</p>
                <p>jiovane_alexsander@hotmail.com</p>
            </div>    
        </div>);
    }
}
export default Contact;