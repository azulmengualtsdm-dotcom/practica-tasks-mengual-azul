import { body } from "express-validator"
import validate from "./validator.js"
import Usermodel from "../models/users.js"

export  const validateidUser=[
    params('id').isInt({min:1}).withMessage('el id debe ser un numero entero positivo').custom(async(id)=>{
        const userExists= await Usermodel.findByPk(id)
        if(!userExists){
            throw new Error(`el usuario con el id${id} no existe en la base de datos`)
        }

        return true
    })
]

export const validateBody=[
    body('name').notEmpty().withMessage('el nombre es oblidatorio'),
    body('email').isEmail().withMessage('debe ser un email').custom(async (email) => {
            const emailExists = await Usermodel.findOne({ where: { email } });
            if (emailExists) {
                throw new Error('El correo electrónico ya se encuentra registrado por otro usuario');
            }
            return true;
        }),
    body('password').isLength({min:6}).withMessage('ya contraseña debe tener al menos 6 caracteres'),
    body('lastname').notEmpty().withMessage('el apellido es obligatorio')
]


