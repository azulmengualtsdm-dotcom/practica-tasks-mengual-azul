import { body, param } from "express-validator";
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
export const validateUpdatePerson= [
  param("id")
    .isInt({ min: 1 }).withMessage("El id debe ser un número entero positivo"),
    
  body("name")
    .optional()
    .notEmpty().withMessage("el nombre no debe estar vacio"),
  
    body("lastname")
    .optional()
    .notEmpty().withMessage("El apellido no debe estar vacío si se proporciona"),
    
  body("userId")
    .optional()
    .isInt({ min: 1 }).withMessage("El userId debe ser un número entero positivo válido")
];
export const validateidPerson = [
  param('id')
    .isInt({ min: 1 }).withMessage("el ID de la persona debe ser un número entero positivo")
    .custom(async (id) => {
      const personExists = await person.findByPk(id);
      if (!personExists) {
        throw new Error("La persona con el ID ${id} no existe en la base de datos");
      }
      return true;
    })
];
