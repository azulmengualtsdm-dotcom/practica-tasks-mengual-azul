import { sequelize } from "../config/database.js";
import subject from "../models/subject.js";
import Usermodel from "../models/users.js";

export const createSubject= async (req, res)=>{
    try {
      const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: 'El nombre de la materia es obligatorio' });
    }

    const newSubject= await subject.create({name})
    res.status(201).json(newSubject)
    } catch (error) {
        res.status(400).json({error:"no se pudo crear la materia"})
    }
}

export const getAllSubject=async (req, res)=>{
    try {
        const data=await subject.findAll({
        include:{
            model:Usermodel,
            as:"users",
            attributes:[ 'name', 'email' ],
            
        }})
        res.status(200).json(data)
        } catch(error){
        res.status(400).json({error:"no se pudo obtener la materia"})
    }
    
    
}