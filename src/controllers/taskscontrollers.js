
import tasks from "../models/tasks";

export const createTasks= async (req, res)=>{
    try{
        const { tittle, description, isComplete }=req.body
        const newTasks= await tasks.create ({tittle, description, isComplete})
        res.status(201).json(newTasks)
    } catch(error){
        res.status(400).json({error:'no se pudo crear una nueva tarea'})
    }
}

