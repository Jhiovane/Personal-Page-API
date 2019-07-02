const mongoose = require("mongoose");
const Perfil = require("../models/Perfil");

class PerfilController {
 

  async index(req, res) {
    const perfil = await Perfil.find();
    return res.json(perfil);
  }
  async store(req, res) {
    const perfil = await Perfil.create(req.body);
    return res.json(perfil);
  }
  async show(req, res) {
    const perfil = await Perfil.findById(req.params.id);
    return res.json(perfil);
  }
  async update(req, res) {
    const perfil = await Perfil.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(perfil);
  }
  async destroy(req, res) {
    await Perfil.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new PerfilController();