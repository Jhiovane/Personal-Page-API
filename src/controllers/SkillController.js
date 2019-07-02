const mongoose = require("mongoose");
const Skill = require("../models/Skill");

class SkillController {
  async index(req, res) {
    const skill = await Skill.find();
    return res.json(skill);
  }
  async store(req, res) {
    const skill = await Skill.create(req.body);
    return res.json(skill);
  }
  async show(req, res) {
    const skill = await Skill.findById(req.params.id);
    return res.json(skill);
  }
  async update(req, res) {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(skill);
  }
  async destroy(req, res) {
    await Skill.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new SkillController();