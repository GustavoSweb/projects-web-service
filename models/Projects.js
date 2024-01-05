const database = require("../database/connection");
const Find = require('./default/Find')
class Projects {
    constructor(table){
        this.search = new Find(table)
    }
}
module.exports = new Projects('projects');
