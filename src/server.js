// Declarando Variáveis (require)
require('dotenv').config()
const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const routes = require('./routes')

const server = express()


// Configurando Middlewares

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)


// Configurando Template Engine (Nunjucks)

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})


// Inicializando o Servidor

server.listen(process.env.PORT || 5000)