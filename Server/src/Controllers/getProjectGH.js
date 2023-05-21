const axios = require('axios')

const projectGets =  (req, res) => {
    axios.get("https://api.github.com/users/Cristian-Massa/repos")
        .then(response =>{
            const works = response.data.filter(element => element.description.includes("#Project") || element.description.includes("#Exercise"))
            const filteredWorks = works.map(({id, name, html_url, language, created_at, homepage, description}) => ({
                id, 
                name, 
                html_url, 
                language, 
                created_at, 
                homepage,
                description
            }))
            res.status(200).json(filteredWorks)
        })
        .catch(err =>{res.status(400).json(err.message)})
}

module.exports = projectGets