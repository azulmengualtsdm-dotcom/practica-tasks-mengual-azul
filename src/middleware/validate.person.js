import { body } from "express-validator";
import validate from "./validator.js";
import person from "../models/person.js";

export const validateBodyPerson=[
    body('name').notEmpty().withMessage('no debe estar vacio').custom(async(name)=>{
        const nameExists=await person.findOne({where:{name}})
        if(nameExists){
            throw new Error('la persona ya existe en la base de datos')
        }
        return true
    })
]