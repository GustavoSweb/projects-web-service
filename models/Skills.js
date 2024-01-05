const database = require("../database/connection");
class Projects {
    constructor(table){
        Object.assign(this, new Find(table)); // ira juntar os metodos do find diretamente em projects
    }
}
module.exports = new Skills('skills');
