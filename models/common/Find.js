const database = require("../../database/connection");
class Find {
  constructor(table) {
    this.table = table;
  }
  async findAll() {
    try {
      if (!this.table) throw new Error("Não foi especificado a tabela");

      const data = await database.select().table(this.table);
      return data;
    } catch (err) {
      throw err;
    }
  }
  async InnerJoinProjectsSkills(id_find_by_id) {
    try {
      const data = await database
        .select([
          "projects.*",
          "skills.name as skill_name",
          "skills.id as skill_id",
          "skills.level as skill_level",
          "skills.urlBackground as skill_urlBackground",
        ])
        .table("projects_skills")
        .innerJoin("skills", "skills.id", "projects_skills.skill_id")
        .innerJoin("projects", "projects.id", "projects_skills.project_id")
        .where(`${this.table}.id`, id_find_by_id);
      return data;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = Find;
