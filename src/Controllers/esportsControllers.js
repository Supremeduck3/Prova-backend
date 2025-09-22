import dados from "../models/dados.js";
const {esports} = dados

const getAllesports = (req, res) => {
    res.status(200).json({
        total:esports.lenght,
        esports:esports
    })
}

export{getAllesports}