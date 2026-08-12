import express from "express";
import { createUsers, deleteUser, getAllusers, getUserById, updateUser } from "../controllers/userscontrollers.js";

import { Router } from "express";

const userRouter= Router();

userRouter.post("/users", createUsers)

userRouter.get("/users", getAllusers)

userRouter.get("/users/:id", getUserById)

userRouter.put("/users/:id", updateUser)

userRouter.delete("/users/:id", deleteUser)

export default userRouter

