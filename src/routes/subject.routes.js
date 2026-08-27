import e from "express";
import { Router } from "express";
import { createSubject, getAllSubject } from "../controllers/subjectscontrollers.js";
import validate from "../middleware/validator.js";
import { validateBodySubjects } from "../middleware/validate.subjects.js";


const subjectRouter=Router()


subjectRouter.post("/",validateBodySubjects, validate, createSubject)
subjectRouter.get("/", getAllSubject)

export default subjectRouter