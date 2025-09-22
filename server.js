import express from "express";
import dotenv from "dotenv";
import esportsRoutes from "./src/Routes/esportsRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const portserver = process.env.port || 3001;

app.get ("/", (req,res) =>{
    res.send("O servidor está funcionando! ...")
});

app.use("/esports", esportsRoutes);

app.get("/princesas/ativas/sim", (Req, res) => {
    const ativa = princesas.filter(a => a.ativa);

    if (ativa) {
        res.status(200).json(ativa);
    } else {
        res.status(404).json({
            erro: `Nenhuma princesa ativa encontrada!`
        });
    }
});

app.listen(portserver, () =>{
    console.log(`O servidor está rodando em http://localhost:${portserver}`)
});