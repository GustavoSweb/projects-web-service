const database = require("../database/connection");
const Find = require("./common/Find");

var MODEL_SUB_TABLE = "skills";
var MODEL_TABLE_NAME = "projects";
class Projects {
  constructor(table) {
    this.search = new Find(table);
  }
  async findAll() {
    try {
      const data_projects = await database.select().table("projects").limit(4);
      var projects = [];
      for (const project of data_projects) {
        let skills = await database
          .select(["skills.*"])
          .table("projects_skills")
          .innerJoin("skills", "skills.id", "projects_skills.skill_id")
          .where("projects_skills.project_id", project.id)
          .limit(5);
        project.skills = skills;
        projects.push(project);
      }
      return projects;
    } catch (err) {
      throw err;
    }
  }
  async findById(id) {
    try {
      const data = await this.search.InnerJoinProjectsSkills(id);
      var { name, description, urlBackground, id, level, repository, url } =
        data[0]; //firstData
      const project = {
        name,
        description,
        urlBackground,
        id,
        level,
        repository,
        url,
      };
      project[MODEL_SUB_TABLE] = [];
      data.forEach(
        ({ skill_id, skill_urlBackground, skill_level, skill_name }) => {
          project[MODEL_SUB_TABLE].push({
            id: skill_id,
            urlBackground: skill_urlBackground,
            level: skill_level,
            name: skill_name,
          });
        }
      );
      return project;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = new Projects(MODEL_TABLE_NAME);
