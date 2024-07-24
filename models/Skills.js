const database = require("../database/connection");
const Projects = require("./Projects");
const Find = require("./common/Find");
class Skills {
  constructor(table) {
    this.search = new Find(table);
  }
  async getProjectsSkill(id) {
    try {
      var data = await database
        .select(["projects.*", "projects_skills.skill_id as skill_id"])
        .table("projects")
        .innerJoin(
          "projects_skills",
          "projects_skills.project_id",
          "projects.id"
        )
        .limit(2)
        .where("skill_id", id);

      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = new Skills("skills");
