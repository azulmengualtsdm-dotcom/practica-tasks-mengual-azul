import e from "express";
import { Router } from "express";
import { createSubject, getAllSubject, updateSubject, deleteSubject, getSubjectById } from "../controllers/subjectscontrollers.js";
import validate from "../middleware/validator.js";
import { validateBodySubjects, validateUpdatesubject, validateidSubject } from "../middleware/validate.subjects.js";


const subjectRouter=Router()


subjectRouter.post("/",validateBodySubjects, validate, createSubject)
subjectRouter.get("/", getAllSubject)
subjectRouter.get("/:id", validateidSubject,  validate, getSubjectById)
subjectRouter.put("/:id", validateUpdatesubject, validate, updateSubject)
subjectRouter.delete("/:id", validateidSubject, validate, deleteSubject)

export default subjectRouter