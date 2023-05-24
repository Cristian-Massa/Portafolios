const axios = require('axios')
const url = 'https://api.github.com/users/Cristian-Massa/repos'
const { Project } = require('../db')
const updateDatabase = async () => {
        const response = await axios.get(url)
        const filteredWorks = response.data.map(({ id, name, html_url, language, created_at, homepage, description }) => ({
            id,
            name,
            html_url,
            language,
            created_at,
            homepage,
            description
        }))
        await Project.destroy({ truncate: true });
        const dbFilteredWorks = await Project.bulkCreate(filteredWorks)
        return dbFilteredWorks
}


module.exports = updateDatabase