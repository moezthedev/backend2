import express from "express"
import {login} from "../controller/allcontrollers.js"

export const loginRouter = express.Router();

loginRouter.post("/",login)