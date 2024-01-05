const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const database = require('./database/connection')
const ProjectsRouter = require("./routes/Projects")

var cors = require('cors')

app.use(cors())
 
app.use('/', ProjectsRouter)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.PORT || 8081
app.listen(PORT, ()=>{
    console.log('Servidor Rodando...')
})