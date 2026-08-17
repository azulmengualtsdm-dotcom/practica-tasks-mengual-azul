import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import { sequelize } from "../config/database";

const person= sequelize.define("Personmodel", {
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    }, 
    lastname:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
}, {
    timestamps:false
})

export default person