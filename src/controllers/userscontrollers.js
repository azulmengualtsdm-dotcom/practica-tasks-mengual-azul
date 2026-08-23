import { sequelize } from '../config/database.js'
import Usermodel from '../models/users.js'
import tasks from '../models/tasks.js'
import person from '../models/person.js'

export const createUsers = async (req, res) => {
  try {
    const { name, email, password, lastname } = req.body;

    if (!name || name.trim() === "" || !email || !password) {
      return res.status(400).json({ message: "Los campos name, email y password son obligatorios" });
    }
    if (!lastname || lastname.trim() === "") {
      return res.status(400).json({ message: "El campo lastname es obligatorio para registrar los datos de la persona" });
    }
    const nuevaPersona = await person.create({ name, lastname });

    // 4. Ahora creamos el Usuario enlazándolo con el ID de la persona creada
    // Usamos el campo 'person_id' de vinculación que definimos antes
    const newUser = await Usermodel.create({ 
      name, 
      email, 
      password,
      person_id: nuevaPersona.id // Enganchamos el usuario con su persona correspondiente
    });

    // 5. Respondemos con éxito enviando los datos creados
    res.status(201).json({
      mensaje: "Usuario y registro de persona creados con éxito",
      usuario: newUser,
      persona: nuevaPersona
    });

  } catch (error) {
    res.status(400).json({ error: 'no se pudo crear el usuario', detalles: error.message });
  }
};

export const getAllusers=async(req,res)=>{
    try {
        const users= await Usermodel.findAll({
          include:{model:tasks, as:"tasks"} 
        })
        res.status(200).json(users)
    } catch(error){
        console.log(error)
        return res.status(500).json({message:'no se pudo cargar todos los usuarios'})
    }
}

export const getUserById=async (req, res)=>{
    try{

      const {id}=req.params
      const usuario= await Usermodel.findByPk(id, {include:{model:tasks, as:"tasks"
      }})
        res.status(201).json(usuario)

    }catch(error){

    }
}

export const updateUser= async (req,res) =>{
    try{
        const { id }=req.params
        const {name, email }=req.body
        const User = await Usermodel.findByPk(id);
    if (!User) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await User.update({ name, email  });
    res.status(200).json(User);
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

    await user.destroy();
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
    }