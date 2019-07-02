import React, { Fragment } from "react";
import EditPerfil from "../../components/EditPerfil";
import EditSkill from "../../components/EditSkill";
import EditPortfolio from "../../components/EditPortfolio";
import EditInfo from "../../components/EditInfo";

const Edit = () => {
  return (
    <Fragment>
      <h1>Editar</h1>
      <EditPerfil />
      <EditSkill/>
      < EditPortfolio/>
      < EditInfo/>
    </Fragment>
  );
};
export default Edit;