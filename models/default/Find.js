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
  async findOne(data) {
    try {
      if (!this.table) throw new Error("Não foi especificado a tabela");

      const ONE_KEY_WHERE = Object.keys(data)[0];
      const VALUE_ONE_KEY = data[ONE_KEY_WHERE];
      const data = await database
        .select()
        .where(ONE_KEY_WHERE, VALUE_ONE_KEY)
        .table(this.table);
      return data[0];
    } catch (err) {
      throw err;
    }
  }
  async findById(id) {
    try {
      if (!id) throw new Error("Não foi especificado o id");
      if (!this.table) throw new Error("Não foi especificado a tabela");
      const data = await database.select().where({ id }).table(this.table);
      return data[0];
    } catch (err) {
      throw err;
    }
  }
}
module.exports = Find;
