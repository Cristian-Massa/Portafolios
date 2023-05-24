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
            allowNull: false,
        },
        html_url:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        language:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        homepage:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })
} 