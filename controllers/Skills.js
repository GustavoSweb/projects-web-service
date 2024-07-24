const { NotExistValue, NotValid, ConflictData } = require("../utils/Error");
const SkillModel = require("../models/Skills");
const Get = require("./common/Get");

class Skills {
  constructor() {
    this.get = new Get(SkillModel); // passando o model do controller
    this.getSkills = this.get.All.bind(this.get); // Faz com quer o metodo all estege instanciado no get
  }
  async getProjects(req, res) {
    const { id } = req.params;
    try {
      const data = await SkillModel.getProjectsSkill(id);
      res.json(data);
    } catch (err) {
      res.sendStatus(500);
    }
  }
}
module.exports = new Skills();
