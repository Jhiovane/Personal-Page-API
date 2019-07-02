const mongoose = require("mongoose");
const Portfolio = require("../models/Portfolio");

class PortfolioController {
  async index(req, res) {
    const portfolio = await Portfolio.find();
    return res.json(portfolio);
  }
  async store(req, res) {
    const portfolio = await Portfolio.create(req.body);
    return res.json(portfolio);
  }
  async show(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    return res.json(portfolio);
  }
  async update(req, res) {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(portfolio);
  }
  async destroy(req, res) {
    await Portfolio.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new PortfolioController();