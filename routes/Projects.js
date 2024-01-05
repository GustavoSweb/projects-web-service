const express = require('express')
const Router = express.Router()
const Projects = require('../controllers/Projects')

Router.get('/projects', Projects.getProjects)

module.exports = Router