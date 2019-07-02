import React, { Fragment } from "react";
import Menu from "../../components/Menu";
import Perfil from "../../components/Perfil";
import Skills from "../../components/Skils";
import Portfolio from "../../components/Portfolio";
import Info from "../../components/Info";
import Contact from "../../components/Contact";
import "./styles.css"

const Main = () => {
  return (
    <Fragment>
      <Menu />
      <Perfil/>
      <Skills/>
      <Portfolio/>
      <Info/>
      <Contact/>
    </Fragment>
  );
};

export default Main;
