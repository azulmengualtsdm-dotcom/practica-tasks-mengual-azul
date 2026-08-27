import { body } from "express-validator";
import validate from "./validator.js";
import subject from "../models/subject.js";


export const validateBodySubjects=[
    body('name').notEmpty().withMessage('el nombre no debe estar vacio').custom(async(name)=>{
        const nameeExists= await subject.findOne({where:{name}})
        if(nameeExists){
            throw new Error('ya existe una materia con ese nombre')
        }
        return true
    })
]