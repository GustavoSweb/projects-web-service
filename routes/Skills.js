const express = require('express')
const Router = express.Router()
const Skills = require('../controllers/Skills')

Router.get('/skills', Skills.getSkills)

module.exports = Router