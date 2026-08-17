import { sequelize } from "../config/database.js";
import person from "../models/person.js";
import Usermodel from "../models/users.js";

export const createPerson= async(req, res)=>{
    try{
        const {name, lastname}=req.body
        if(name.trim()==="" && lastname.trim()==="" || !name && !lastname){
            res.status(400).json({error:"debe ingresar su nombre y apellido"})
        }
        const newPerson=await person.create({name, lastname})
        res.status(201).json(newPerson)
    }catch(error){
        res.status(400).json({error:"no se pudo crear"})
    }
}

export const getAllPerson= async(req, res)=>{
    try{
        const data=await person.findAll({
            include:{
                model:Usermodel,
                as:'user',
                attributes:['name', 'email']
            }
        })
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error:"no se pudo encontrar a la persona"})
    }
}