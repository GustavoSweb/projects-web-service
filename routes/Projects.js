const express = require('express')
const Router = express.Router()
const ProjectsController = require('../controllers/Projects')

Router.get('/projects', ProjectsController.GetProjects)

module.exports = Router