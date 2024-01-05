const {NotExistValue, NotValid, ConflictData} = require('../utils/Error')
const project = require("../models/Projects")

class Projects {
    async GetProjects(req, res){
        try{
            const data = await project.search.findAll()
            res.status(200).json(data)
        }catch(err){
            console.log(err)
            if(err.status) res.status(err.status).json({err:err.message})
            res.sendStatus(500)
        }
    }
}

module.exports = new Projects()