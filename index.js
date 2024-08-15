require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const database = require("./database/connection");
const ProjectsRouter = require("./routes/Projects");
const SkillsRouter = require("./routes/Skills");

var cors = require("cors");

app.use(cors());

app.use("/", ProjectsRouter);
app.use("/", SkillsRouter);
app.get("/", (req, res) => {
  res.send("API FUNCIONANDO" + process.env.HOST_NAME);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 80;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor Rodando...");
});
