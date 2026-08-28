import { body, param } from "express-validator";
import validate from "./validator.js";
import tasks from "../models/tasks.js";

export const validateidTasks=[
    param('id').isInt({min:1}).withMessage('el id debe ser un numero entero positivo').custom(async(id)=>{
        const userExists= await tasks.findByPk(id)
        if(!userExists){
            throw new Error(`el usuario con el id ${id} no existe en la base de datos`)
        }

        return true
    })
]

export const validateTasks=[
    body('title').notEmpty().withMessage('el titulo de la tarea debe ser obligatorio').custom(async(title)=>{
        const titleExist= await tasks.findOne({where:{title}})
         if (titleExist) {
                throw new Error('Ya existe una tarea registrada con ese mismo título');
            }
            return true;
        }),
        body('description').notEmpty().withMessage('no descripcion no puede estar vacia'),
        body('user_id').notEmpty().withMessage('El campo user_id es requerido obligatoriamente')

]


export const updateTaskValidation = [
  param("id")
    .isInt({ min: 1 }).withMessage("El id debe ser un número entero positivo"),
    
  body("title")
    .optional()
    .notEmpty().withMessage("El título no debe estar vacío si se proporciona"),
    
  body("description")
    .optional()
    .notEmpty().withMessage("La descripción no debe estar vacía si se proporciona"),
    
  body("isComplete")
    .optional()
    .isBoolean().withMessage("El campo isComplete debe ser un valor booleano (true/false)")
];