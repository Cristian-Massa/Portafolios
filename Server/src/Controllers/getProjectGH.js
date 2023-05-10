const axios = require('axios')

const projectGets =  (req, res) => {
    axios.get("https://api.github.com/users/Cristian-Massa/repos")
        .then(response =>{
            const works = response.data.filter(element => element.description.includes("#Project") || element.description.includes("#Exercise"))
            res.status(200).json(works)
        })
        .catch(err =>{res.status(400).json(err.message)})
}

module.exports = projectGets