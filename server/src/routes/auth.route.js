import express from "express";
import {createUser} from "../controllers/Auth.controller.js"

const router = express.Router();

router.post("/register", createUser);

export default router;