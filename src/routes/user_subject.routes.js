import { Router } from "express";
import { createUserSubject, getAlluserSubject } from "../controllers/users_subjectcontroller.js";

const usersubjRouters=Router()

usersubjRouters.post("/user-subjects", createUserSubject)
usersubjRouters.get("/user-subjects", getAlluserSubject)

export default usersubjRouters