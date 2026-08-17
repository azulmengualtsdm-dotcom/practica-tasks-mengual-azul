import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import tasks from "./tasks.js";

import person from "./person.js";

export const Usermodel =sequelize.define('User', {
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    }, {
    timestamps:false
})
export default Usermodel

Usermodel.belongsTo(Personmodel, {foreignKey:"person_id", as:"creator"})
Personmodel.belongsTo(Usermodel, {foreignKey:"person_id", as:"user"})

