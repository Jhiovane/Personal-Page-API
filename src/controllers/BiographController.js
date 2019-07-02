const mongoose = require("mongoose");
const Biograph = require("../models/Biograph");

class BiographController {
  async index(req, res) {
    const biographs = await Biograph.find();
    return res.json(biographs);
  }
  async store(req, res) {
    const biographs = await Biograph.create(req.body);
    return res.json(biographs);
  }
  async show(req, res) {
    const biographs = await Biograph.findById(req.params.id);
    return res.json(biographs);
  }
  async update(req, res) {
    const biographs = await Biograph.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(Biographs);
  }
  async destroy(req, res) {
    await biograph.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new BiographController();