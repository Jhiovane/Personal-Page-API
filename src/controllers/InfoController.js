const mongoose = require("mongoose");
const Info = require("../models/Info");

class InfoController {
  async index(req, res) {
    const infos = await Info.find();
    return res.json(infos);
  }
  async store(req, res) {
    const infos = await Info.create(req.body);
    return res.json(infos);
  }
  async show(req, res) {
    const infos = await Info.findById(req.params.id);
    return res.json(infos);
  }
  async update(req, res) {
    const infos = await Info.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(infos);
  }
  async destroy(req, res) {
    await Info.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new InfoController();