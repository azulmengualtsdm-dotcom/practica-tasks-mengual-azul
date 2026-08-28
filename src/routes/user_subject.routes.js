import { Router } from "express";
import { createUserSubject, getAlluserSubject, usersubjRouters  } from "../controllers/users_subjectcontroller.js";
import validate from "../middleware/validator.js";
import { validateUserSubject,  } from "../middleware/validate.users.subject.js";


const usersubjRouters=Router()

usersubjRouters.post("/",validateUserSubject, validate, createUserSubject)
usersubjRouters.get("/", getAlluserSubject)


export default usersubjRouters