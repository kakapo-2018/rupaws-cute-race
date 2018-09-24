const express = require('express')
const bodyParser = require('body-parser')
const server = express()

const path = require('path');
const apiRoutes = require('./routes/api')


// Middleware
server.use(express.json())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/api/animals', apiRoutes)
 

server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = server



