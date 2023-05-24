const axios = require('axios')
const url = 'https://api.github.com/users/Cristian-Massa/repos'
const { Project } = require('../db')

let bdProjects = null
let lastUpdate = null;

const projectGets = async () => {
    try {
        const dbFilteredWorks = await Project.findAll()
        return dbFilteredWorks

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = projectGets

