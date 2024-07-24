const express = require("express");
const Router = express.Router();
const Skills = require("../controllers/Skills");

Router.get("/skills", Skills.getSkills);
Router.get("/skills/:id/projects", Skills.getProjects);
module.exports = Router;
