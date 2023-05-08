const express = require("express")
const router = express.Router()

router.get('/projects', (req, res) =>{
    try{
        const {id, name} = req.body
        const projects = {
            id,
            name,
        }
        res.status(200).json(projects)
    }catch(err){
        res.status(400).json({ error: err.message})
    }
})


module.exports = router