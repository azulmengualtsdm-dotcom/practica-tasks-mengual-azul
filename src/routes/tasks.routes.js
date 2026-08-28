import { createTasks, getAllTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskscontrollers.js";
import { Router } from "express";
import validate from "../middleware/validator.js";
import { validateidTasks, validateTasks, updateTaskValidation } from "../middleware/validate.tasks.js";

const tasksRouter = Router();

tasksRouter.post("/", validateTasks, validate, createTasks);
tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", validateidTasks, validate, getTaskById);
tasksRouter.put("/:id", updateTaskValidation, validate, updateTask);
tasksRouter.delete("/:id", validateidTasks, validate, deleteTask);

export default tasksRouter;
