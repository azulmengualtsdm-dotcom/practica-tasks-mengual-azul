
import tasks from "../models/tasks.js";
import Usermodel from "../models/users.js";

export const createTasks= async (req, res)=>{
    try{
        const { title, description, isComplete, user_id }=req.body
        if(!user_id) {
          return res.status(400).json({error:'no se puede crear una tarea sin un usuario'})
        }

        const newTasks= await tasks.create ({title, description, isComplete, user_id })
        res.status(201).json(newTasks)
    } catch(error){
        res.status(400).json({error:'no se pudo crear una nueva tarea', detalles:error.message})
    }
}

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await tasks.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    
    const taskAEditar = await tasks.findByPk(id);
    if (!taskAEditar) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    await taskAEditar.update({ title, description, isComplete });
    res.status(200).json(taskAEditar);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la tarea', detalles: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskAEliminar = await tasks.findByPk(id);
    if (!taskAEliminar) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    await taskAEliminar.destroy();
    res.status(200).json({ mensaje: 'Tarea personalizada eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};

