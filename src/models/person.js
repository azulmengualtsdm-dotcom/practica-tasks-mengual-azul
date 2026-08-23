import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const person= sequelize.define("Person", {
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