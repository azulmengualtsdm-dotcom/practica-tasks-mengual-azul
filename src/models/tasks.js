const { DataTypes } = require( 'sequelize');
const sequelize= require('../config/database.js')

const tasks= sequelize.define('tasks',
    {
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
            unique:true,
            validate: {
      notEmpty: true
    }
        },

    description:{
        type:DataTypes.STRING(100),
        allowNull:false,
        validate: {
      notEmpty: true
    }

    },
    isComplete:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }}, {
  timestamps: true // Crea createdAt y updatedAt de forma automática
})