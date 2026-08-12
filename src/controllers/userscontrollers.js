import { Usermodel } from '../models/users.js'

export const createUsers= async (req,res)=>{
    try {
        const {name, email, password}=req.body

      if (!name){
        return res.status(400).json({message:"el user no debe estar vacio"})
      }

        const newUser= await Usermodel.create({name, email, password})
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json ({error:'no se pudo crear el usuario'})
    }
}

export const getAllusers=async(req,res)=>{
    try {
        const users= await Usermodel.findAll
        res.status(200).json(users)
    } catch(error){
        console.log(error)
        return res.status(500).json({message:'no se pudo cargar todos los usuarios'})
    }
}

export const getUserById=async (req, res)=>{
    try{

      const {id}=req.params
      const usuario= await Usermodel.findByPk
        res.status(201).json({message:"obtener un user por id"})

    }catch(error){

    }
}

export const updateUser= async (req,res) =>{
    try{
        const { id }=req.params
        const {name, email, password}=req.body
        const User = await Usermodel.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.update({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el usuario', detalles: error.message });
  }
}

export const deleteUser= async (req,res)=>{
    try{
        const {id}=req.params
        const user= await Usermodel.findByPk(id)
        if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await Usermodel.destroy();
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
    }