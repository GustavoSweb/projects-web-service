const {NotExistValue, NotValid, ConflictData} = require('../utils/Error')
const ProjectModel = require("../models/Projects")
var Get = require('./common/Get') 

class Projects {
    constructor() {
        this.get = new Get(ProjectModel); // passando o model do controller
        this.getProjects = this.get.All.bind(this.get);  // Faz com quer o metodo all estege instanciado no get
    }
}

module.exports = new Projects()