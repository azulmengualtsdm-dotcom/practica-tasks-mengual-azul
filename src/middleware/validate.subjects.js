import { body, param } from "express-validator";
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
export const validateUpdatesubject= [
  param("id")
    .isInt({ min: 1 }).withMessage("El id debe ser un número entero positivo"),
    
  body("name")
    .optional()
    .notEmpty().withMessage("El nombre de la materia no debe estar vacío si se proporciona")
    .custom(async (name, { req }) => {
      const subjectExists = await subject.findOne({ where: { name } });
      if (subjectExists && subjectExists.id !== parseInt(req.params.id)) {
        throw new Error('Ya existe otra materia registrada con ese nombre');
      }
      return true;
    })
];
export const validateidSubject = [
  param('id')
    .isInt({ min: 1 }).withMessage('El ID de la materia debe ser un número entero positivo')
    .custom(async (id) => {
      const subjectExists = await subject.findByPk(id);
      if (!subjectExists) {
        throw new Error(`La materia con el ID ${id} no existe en la base de datos`);
      }
      return true;
    })
];