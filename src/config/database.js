import { Sequelize } from "sequelize";

export const sequelize= new Sequelize('tasks_users_db','root', '', {
    host:"localhost",
    dialect:"mysql",
    logging:false
})

export const startDb= async ()=>{
    try{
        await sequelize.sync();
        console.log("conexion exitosa con la base de datos")
    } catch(error) {
        console.log("no se pudo conectar a la base de datos", error)
    }
}
