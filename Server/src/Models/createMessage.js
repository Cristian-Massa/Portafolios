const { DataTypes} = require('sequelize')

module.exports = (dataBase) =>{
    dataBase.define('Form', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        message:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email:{
            type: DataTypes.TEXT,
            allowNull: false,
            isEmail: true,
        },
        type:{
            type: DataTypes.ENUM("Presupuesto", "Contactar", "Consulta", "Recomendacion"),
            allowNull: false,
        }
    })
}