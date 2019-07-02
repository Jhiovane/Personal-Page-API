const express = require("express");
const routes = express.Router();
const InfoController = require("./controllers/InfoController");
const BiographController = require("./controllers/BiographController");
const PerfilController = require("./controllers/PerfilController");
const SkillController = require("./controllers/SkillController");
const PortfolioController = require("./controllers/PortfolioController");


routes.get("/infos", InfoController.index);
routes.post("/infos", InfoController.store);
routes.get("/infos/:id", InfoController.show);
routes.put("/infos/:id", InfoController.update);
routes.delete("/infos/:id", InfoController.destroy);

routes.get("/biographs", BiographController.index);
routes.post("/biographs", BiographController.store);
routes.get("/biographs/:id", BiographController.show);
routes.put("/biographs/:id", BiographController.update);
routes.delete("/biographs/:id", BiographController.destroy);

routes.get("/perfil", PerfilController.index);
routes.post("/perfil", PerfilController.store);
routes.get("/perfil/:id", PerfilController.show);
routes.put("/perfil/:id", PerfilController.update);
routes.delete("/perfil/:id", PerfilController.destroy);

routes.get("/skill", SkillController.index);
routes.post("/skill", SkillController.store);
routes.get("/skill/:id", SkillController.show);
routes.put("/skill/:id", SkillController.update);
routes.delete("/skill/:id", SkillController.destroy);

routes.get("/portfolio", PortfolioController.index);
routes.post("/portfolio", PortfolioController.store);
routes.get("/portfolio/:id", PortfolioController.show);
routes.put("/portfolio/:id", PortfolioController.update);
routes.delete("/portfolio/:id", PortfolioController.destroy);

module.exports = routes;