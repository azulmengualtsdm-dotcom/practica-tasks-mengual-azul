import { Router } from "express";
import { createPerson, getAllPerson } from "../controllers/personcontrollers.js";

const personRouter=Router()

personRouter.post("/persons", createPerson)
personRouter.get("/persons", getAllPerson)

export default personRouter