import express, { Router } from "express";
import { createteams, deleteTeams, filtrarPorcampeonato, filtrarPorjogo, getAllesports, getAtivo, getEsportsbyid, getInativo, updateTimes } from "../Controllers/esportsControllers.js";

const router = express.Router();

router.get("/", getAllesports);
router.get("/jogo/:nome", filtrarPorjogo);
router.get("/campeonato/:nome", filtrarPorcampeonato);
router.get("/:id", getEsportsbyid);
router.post("/", createteams);
router.delete("/:id",deleteTeams);
router.put("/:id",updateTimes);
router.get("/ativo/true", getAtivo);
router.get("/ativo/false", getInativo);

export default router