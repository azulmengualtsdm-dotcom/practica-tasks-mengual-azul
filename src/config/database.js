import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";
import dotenv from 'dotenv'

export const sequelize= new Sequelize(
  process.env.DB_NAME || 'tasks_users_db', 
  process.env.DB_USER || 'root', 
  process.env.DB_PASSWORD || '', 
  { host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
)

export const startDb= async ()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync({ force: true });
        console.log("conexion exitosa con la base de datos")
    } catch(error) {
        console.log("no se pudo conectar a la base de datos", error)
    }
}
