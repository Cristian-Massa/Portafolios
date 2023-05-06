const { Form } = require('../db')

const FormHandler = async (messageManagment) =>{
    const send = await Form.create(messageManagment)
    return send
}

module.exports = FormHandler