const FormHandler = require('../Controllers/MessageHandler')
const express = require('express');
const router = express.Router();
const axios = require("axios")
const projectGets = require("../Controllers/getProjectGH")
const { Project } = require('../db');


router.post('/message', async (req, res) => {
    try {
        const { name, email, message, type } = req.body;
        const messages = {
            name,
            email,
            type,
            message
        }
        const newMessage = await FormHandler(messages)
        res.status(200).json(newMessage)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get('/projects', async (req, res) => {
    try {
        const projects = await projectGets()
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});




module.exports = router