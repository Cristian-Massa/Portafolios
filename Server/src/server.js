const express = require("express")
const server = express()
const router = require('./Routes/postMessage')
const cors = require('cors')
const corsOption = {
    origin: 'http://localhost:3000'
}
const updateDatabase = require('./Controllers/updateDataBase')

server.use(express.json())
server.use(cors(corsOption))
server.use('/', router)


updateDatabase()
setInterval(updateDatabase, 3600000)


module.exports = server