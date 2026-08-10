const user=require ('../models/users')

const createUsers= async (req,res)=>{
    try {
        const {name, email, password}=req.body
        const newUser= await user.create({name, email, password})
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json ({error:'no se pudo crear el usuario'})
    }
}

const getAllusers=async(req,res)=>{
    try {
        const users= await user.findAll
        res.status(200).json(users)
    } catch(error){
        res.status(500).json({error:'no se pudo cargar todos los usuarios'})
    }
}

const updateUser= async (req,res) =>{
    try{
        const { id }=req.params
        const {name, email, password}=req.body
        const User = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.update({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el usuario', detalles: error.message });
  }
}

const deleteUser= async (req,res)=>{
    try{
        const {id}=req.params
        const user= await user.findByPk(id)
        if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await user.destroy();
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
    }

    module.exports = {
  createUsers,
  getAllusers,
  updateUser,
  deleteUser
};