import { sequelize } from "../config/database.js";
import subject from "../models/subject.js";
import Usermodel from "../models/users.js";

export const createSubject= async (req, res)=>{
    try {
      const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: 'El nombre de la materia es obligatorio' });
    }

    const newSubject= await subject.create({name})
    res.status(201).json(newSubject)
    } catch (error) {
        res.status(400).json({error:"no se pudo crear la materia"})
    }
}

export const getAllSubject=async (req, res)=>{
    try {
        const data=await subject.findAll({
        include:{
            model:Usermodel,
            as:"users",
            attributes:[ 'name', 'email' ],
            
        }})
        res.status(200).json(data)
        } catch(error){
        res.status(400).json({error:"no se pudo obtener la materia"})
    }
    
    
}

export const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const limData = matchedData(req);

    const materia = await subject.findByPk(id);
    if (!materia) {
      return res.status(404).json({ error: 'Materia no encontrada' });
    }

    await materia.update(limData);
    res.status(200).json({ mensaje: 'Materia actualizada correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar', detalles: error.message });
  }}

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const materia = await subject.findByPk(id);
    
    if (!materia) {
      return res.status(404).json({ error: 'Materia no encontrada o ya eliminada' });
    }

    await materia.destroy();
    res.status(200).json({ mensaje: 'Materia eliminada de forma correcta' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la materia', detalles: error.message });
  }
};

export const getSubjectById=async(req, res)=>{
  try{
    const {id}=req.params
    if (!materia){
      return res.status(404).json({error:"materia no encontrada"}

      )
    }
    res.status(200).json(materia)
  }catch(error){
    res.status(500).json({error:"error al obtener la materia", detalles:error.message})
  }
}
