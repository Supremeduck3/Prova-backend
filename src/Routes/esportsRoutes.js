import express from "express";
import { createteams, getAllesports, getEsportsbyid } from "../Controllers/esportsControllers.js";

const router = express.Router();

router.get("/", getAllesports)
router.get("/:id", getEsportsbyid)
router.post("/", createteams)

export default router