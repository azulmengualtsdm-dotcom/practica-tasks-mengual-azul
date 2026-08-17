import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';
import Usermodel from './users.js';

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
    }, User_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            Model:"Users",
            key:"id"
        }, validate:{
            notNull:{msg:"la tarea debe pertenecer a un usuario"}
        }
    }}, {
  timestamps: false
},)

export default tasks

tasks.belongsTo(Usermodel, {foreignKey:"User_id", as:"author"})
Usermodel.hasMany(tasks,{foreignKey:"User_id", as:"tasks"})
