import express from "express";
import { createteams, deleteTeams, getAllesports, getEsportsbyid } from "../Controllers/esportsControllers.js";

const router = express.Router();

router.get("/", getAllesports);
router.get("/:id", getEsportsbyid);
router.post("/", createteams);
router.delete("/:id",deleteTeams)

export default router