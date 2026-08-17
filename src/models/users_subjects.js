import { DataTypes } from "sequelize";

import Sequelize from "sequelize";

import Usermodel from "./users.js";

import subject from "./subject.js";

export const UserSubjectModel = sequelize.define(
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
    timestamps: false,
  },
);

subject.belongsToMany(Usermodel, {through:UserSubjectModel ,foreignKey:"subject_id", as:"users"})
Usermodel.belongsToMany(subject, {through:UserSubjectModel ,foreignKey:"User_id", as:"subjects"})