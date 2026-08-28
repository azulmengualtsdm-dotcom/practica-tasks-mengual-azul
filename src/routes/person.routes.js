import { Router } from "express";
import { createPerson, getAllPerson, updatePerson, deletePerson, getPersonByid } from "../controllers/personcontrollers.js";
import { validateBodyPerson, validateidPerson, validateUpdatePerson} from "../middleware/validate.person.js";
import validate from "../middleware/validator.js";
import person from "../models/person.js";

const personRouter=Router()

personRouter.post("/",validateBodyPerson, validate,  createPerson)
personRouter.get("/", getAllPerson)
personRouter.get("/:id",validateidPerson, validate, getPersonByid )
personRouter.put("/:id", validateUpdatePerson, validate, updatePerson )
personRouter.delete("/:id", validateidPerson, validate, deletePerson)
export default personRouter