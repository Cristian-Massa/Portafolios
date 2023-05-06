const express = require("express")
const server = express()
const router = require('./Routes/postMessage')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use('/', router)


module.exports = server