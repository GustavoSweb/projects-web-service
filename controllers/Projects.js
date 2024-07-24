const { NotExistValue, NotValid, ConflictData } = require("../utils/Error");
const ProjectModel = require("../models/Projects");
var Get = require("./common/Get");

class Projects {
  async get(req, res) {
    try {
      const projects = await ProjectModel.findAll();
      res.json(projects);
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = new Projects();
