import express from "express";
import { createUsers, deleteUser, getAllusers, getUserById, updateUser } from "../controllers/userscontrollers.js";

import { Router } from "express";
import Usermodel from "../models/users.js";
import validate from "../middleware/validator.js";
import { validateidUser, validateBody } from "../middleware/validate.user.js";

const userRouter= Router();


userRouter.post("/", validateBody ,
validate,
createUsers)

userRouter.get("/", validateBody, validateBody,validate, getAllusers)

userRouter.get("/:id", validateidUser, validateBody, validate, getUserById)

userRouter.put("/:id",validateidUser, validate, updateUser)

userRouter.delete("/:id",validateidUser, validate, deleteUser)

export default userRouter

