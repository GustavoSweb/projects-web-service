const database = require("../database/connection");
const Find = require("./common/Find");
class Skills {
  constructor(table) {
    this.search = new Find(table);
  }
}
module.exports = new Skills("skills");
