import express from "express";
import { createUsers, deleteUser, getAllusers, getUserById, updateUser } from "../controllers/userscontrollers.js";

import { Router } from "express";
import Usermodel from "../models/users.js";
import validate from "../middleware/validator.js";
import { validateidUser, validateBody, updateUserValidation } from "../middleware/validate.user.js";

const userRouter= Router();


userRouter.post("/", validateBody ,
validate,
createUsers)

userRouter.get("/:id", validateBody, validateBody,validate,  getUserById)

userRouter.get("/",getAllusers )

userRouter.put("/:id",updateUserValidation, validate, updateUser)

userRouter.delete("/:id",validateidUser, validate, deleteUser)

export default userRouter

