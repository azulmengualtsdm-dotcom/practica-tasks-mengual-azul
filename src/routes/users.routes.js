import express from "express";
import { createUsers, getAllusers } from "../controllers/userscontrollers.js";

import { Router } from "express";

const userRouter= Router();

userRouter.post("/users", createUsers)

userRouter.get("/users", getAllusers)

userRouter.get("/users/:id", (req, res)=>{})

userRouter.put("/users/:id", (req, res)=>{})

