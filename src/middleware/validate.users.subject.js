import { body } from "express-validator";
import validate from "./validator";

export const validateUserSubject=[
  body('User_id')
    .notEmpty().withMessage('El campo User_id es obligatorio para realizar la inscripción')
    ,
    
  body('subject_id')
    .notEmpty().withMessage('El campo subject_id es requerido de forma obligatoria')
]