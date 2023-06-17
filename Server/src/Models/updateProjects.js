const {DataTypes} = require('sequelize');


module.exports = (dataBase) =>{
    dataBase.define('Project', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        name:{
            type: DataTypes.TEXT,
        },
        html_url:{
            type: DataTypes.TEXT,
        },
        language:{
            type: DataTypes.TEXT,
        },
        created_at:{
            type: DataTypes.TEXT,
        },
        description:{
            type: DataTypes.TEXT,
        },
    })
} 