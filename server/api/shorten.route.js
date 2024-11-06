import urlShortener from "../utils/urlShortener";
import express from "express";
const router = express.Router();


export default router.post("/shorten",async (req,res) => {
    try{
        const originalURL = req.body.url;
        const len = req.body.len;
        const shortURL = await urlShortener(len);
        res.status(200).json({ shortURL });

    }catch(error){
        console.log(error);
        res.sendStatus(500).json("error generating shorten url");
    }
})

