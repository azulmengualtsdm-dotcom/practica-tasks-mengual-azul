import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

import Sequelize from "sequelize";

import Usermodel from "./users.js";

import subject from "./subject.js";

const UserSubjectModel = sequelize.define(
  "User_subject",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
    paranoid:true
  },
);

subject.belongsToMany(Usermodel, {through:UserSubjectModel ,foreignKey:"subject_id", as:"users"})
Usermodel.belongsToMany(subject, {through:UserSubjectModel ,foreignKey:"User_id", as:"subjects"})

export default UserSubjectModel