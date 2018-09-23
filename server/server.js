const express = require('express')
const bodyParser = require('body-parser')
const server = express()

const path = require('path');
const routes = require('./routes')


// Middleware
server.use(express.json())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', routes)

module.exports = server
