const server = require("./src/server")
const {dataBase} = require("./src/db")

dataBase.sync({force: true})
    .then(() =>{
        server.listen(3001, () => {
            console.log(`servidor abierto en el puerto 3001`)
        })
    })
    .catch((err) =>{ console.log(err.message)})