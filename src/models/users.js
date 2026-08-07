const { DataTypes} = require('sequelize')
const sequelize= require('../config/database.js')

const users=sequelize.define('users', {
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false,
        validate:{
            notEmpty:true,
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate:{
            notEmpty:true
        }
    }
}, {
    timestamps:true
})
module.exports = users;