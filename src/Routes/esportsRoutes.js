import express from "express";
import { createteams, deleteTeams, filtrarPorjogo, getAllesports, getEsportsbyid } from "../Controllers/esportsControllers.js";

const router = express.Router();

router.get("/", getAllesports);
router.get("/:filtro", filtrarPorjogo);
router.get("/:id", getEsportsbyid);
router.post("/", createteams);
router.delete("/:id",deleteTeams)

export default router