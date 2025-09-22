import express from "express";
import { getAllesports } from "../Controllers/esportsControllers.js";

const router = express.Router();

router.get("/", getAllesports)

export default router