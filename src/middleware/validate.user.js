import { body, param } from "express-validator";
import Usermodel from "../models/users.js";

export const validateidUser = [
  param('id')
    .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo')
    .custom(async (id) => {
      const userExists = await Usermodel.findByPk(id);
      if (!userExists) {
        throw new Error(`El usuario con el ID ${id} no existe en la base de datos`);
      }
      return true;
    })
];

export const validateBody = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
    
  body('email')
    .isEmail().withMessage('Debe ser un email válido')
    .custom(async (email) => {
      const emailExists = await Usermodel.findOne({ where: { email } });
      if (emailExists) {
        throw new Error('El correo electrónico ya se encuentra registrado por otro usuario');
      }
      return true;
    }),
    
  body('password')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    
  body('lastname')
    .notEmpty().withMessage('El apellido de la persona asociada es obligatorio')
];

export const updateUserValidation = [
  param("id")
    .isInt({ min: 1 }).withMessage("El id debe ser un número entero positivo"),
    
  body("name")
    .optional()
    .notEmpty().withMessage("El name no debe ser vacío"),
    
  body("email")
    .optional()
    .notEmpty().withMessage("El email no debe ser vacío")
    .isEmail().withMessage("El email debe ser válido")
    .custom(async (email, { req }) => {
      const existingUser = await Usermodel.findOne({ where: { email } });
      if (existingUser && existingUser.id !== parseInt(req.params.id)) {
        throw new Error('El correo electrónico ya se encuentra registrado por otro usuario');
      }
      return true;
    }),
    
  body("password")
    .optional()
    .isLength({ min: 6 }).withMessage("La password debe tener al menos 6 caracteres")
];
