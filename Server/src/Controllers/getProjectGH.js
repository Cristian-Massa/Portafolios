const axios = require('axios')


const projectGets = () =>{
    axios.get('https://api.github.com/users/Cristian-Massa/repos')
    .then(response =>{
            let Projects = []
            let Exercises = []
            // response.data.filter(element => element.description)
            for (let index = 0; index <= response.data.length; index++) {
                // console.log(response.data[index].description)
                if(response.data[index] && response.data[index].description && response.data[index].description.match("#Project")){
                    Projects.push(response.data[index])
                }
                if(response.data[index] && response.data[index].description && response.data[index].description.match("#Exercise")){
                    Exercises.push(response.data[index])
                }
            }
            console.log(Projects)
            const works = {Projects, Exercises}
            return works
    })
}

module.exports = projectGets