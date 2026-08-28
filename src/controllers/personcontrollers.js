import { sequelize } from "../config/database.js";
import person from "../models/person.js";
import Usermodel from "../models/users.js";

export const createPerson= async(req, res)=>{
    try{
        const {name, lastname}=req.body
        if(name.trim()==="" && lastname.trim()==="" || !name && !lastname){
            res.status(400).json({error:"debe ingresar su nombre y apellido"})
        }
        const newPerson=await person.create({name, lastname})
        res.status(201).json(newPerson)
    }catch(error){
        res.status(400).json({error:"no se pudo crear"})
    }
}

export const getAllPerson= async(req, res)=>{
    try{
        const data=await person.findAll({
            include:{
                model:Usermodel,
                as:'user',
                attributes:['name', 'email']
            }
        })
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error:"no se pudo encontrar a la persona"})
    }
}

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const limData = matchedData(req);

    const personaVal = await person.findByPk(id);
    if (!person) {
      return res.status(404).json({ error: 'persona no encontrada' });
    }

    await personaVal.update(limData);
    res.status(200).json({ mensaje: 'persona actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar', detalles: error.message });
  }
};

export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await person.findByPk(id);
    
    if (!persona) {
      return res.status(404).json({ error: 'Registro de persona no encontrado' });
    }

    await persona.destroy();
    res.status(200).json({ mensaje: 'Persona eliminada de forma correcta' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el registro de persona' });
  }
};
