import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


import person from "./person.js";

const Usermodel = sequelize.define('User', {
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
        person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "People",
        key: "id",
      },
    },
      }, {
    timestamps:true,
    paranoid:true
})
export default Usermodel

Usermodel.belongsTo(person, {foreignKey:"person_id", as:"creator"})
person.hasOne(Usermodel, {foreignKey:"person_id", as:"user"})

