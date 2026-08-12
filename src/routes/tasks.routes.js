import { createTasks, getAllTasks, getTaskById, updateTask, deleteTask  } from "../controllers/taskscontrollers.js";

import { Router } from "express";


const tasksRouter= Router()

tasksRouter.post("/tasks", createTasks)
tasksRouter.get("/tasks", getAllTasks)
tasksRouter.get("/tasks/:id", getTaskById)
tasksRouter.put("/tasks/:id", updateTask)
tasksRouter.delete("/tasks/:id", deleteTask)

export default tasksRouter