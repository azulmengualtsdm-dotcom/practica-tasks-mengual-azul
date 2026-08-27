import { Router } from "express";
import { createPerson, getAllPerson } from "../controllers/personcontrollers.js";
import { validateBodyPerson } from "../middleware/validate.person.js";
import validate from "../middleware/validator.js";

const personRouter=Router()

personRouter.post("/persons",validateBodyPerson, validate,  createPerson)
personRouter.get("/persons", getAllPerson)

export default personRouter