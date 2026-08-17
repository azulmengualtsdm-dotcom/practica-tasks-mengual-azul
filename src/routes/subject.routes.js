import e from "express";
import { Router } from "express";
import { createSubject, getAllSubject } from "../controllers/subjectscontrollers.js";

const subjectRouter=Router()

subjectRouter.post("/subjects", createSubject)
subjectRouter.get("/subjects", getAllSubject)

export default subjectRouter