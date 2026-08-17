import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

import Usermodel from "./users";
import { sequelize } from "../config/database";

const subject=sequelize.define('Subjectmodel', {
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
}, {
    timestamps:false
})

subject.hasMany(Usermodel, {foreignKey:"userRegis_id", as:"registered"})
Usermodel.hasMany(subject, {foreignKey:"userRegis_id", as:""})