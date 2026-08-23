import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";

import Usermodel from "./users.js";

const subject=sequelize.define('subject', {
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
}, {
    timestamps:false
})

export default subject