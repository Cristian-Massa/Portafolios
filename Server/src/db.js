const { Sequelize } = require("sequelize")
require('dotenv').config()
const createMessage = require('./Models/createMessage')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env


const dataBase = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {logging: true}
)

createMessage(dataBase)

const { Form } = dataBase.models


module.exports = {
    Form,
    dataBase
}