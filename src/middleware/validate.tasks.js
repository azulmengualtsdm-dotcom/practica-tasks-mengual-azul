import { body } from "express-validator";
import validate from "./validator.js";
import tasks from "../models/tasks.js";

export const validateidTasks=[
    params('id').isInt({min:1}).withMessage('el id debe ser un numero entero positivo').custom(async(id)=>{
        const userExists= await Usermodel.findByPk(id)
        if(!userExists){
            throw new Error(`el usuario con el id${id} no existe en la base de datos`)
        }

        return true
    })
]

export const validateTasks=[
    body('title').notEmpty().withMessage('el titulo de la tarea debe ser obligatorio').custom(async(title)=>{
        const titleExist= await tasks.findOne({where:title})
         if (titleExists) {
                throw new Error('Ya existe una tarea registrada con ese mismo título');
            }
            return true;
        }),
        body('description'),notEmpty().withMessage('no descripcion no puede estar vacia'),
        body('user_id').notEmpty().withMessage('El campo user_id es requerido obligatoriamente')
]