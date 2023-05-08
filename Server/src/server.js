const express = require("express")
const server = express()
const router = require('./Routes/postMessage')
const cors = require('cors')
const corsOption = {
    origin: 'http://localhost:3000'
}

server.use(express.json())
server.use(cors(corsOption))
server.use('/', router)


module.exports = server