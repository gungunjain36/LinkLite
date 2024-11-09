import urlShortener from "../utils/urlShortener.js";
import express from "express";
import client from "../utils/redis-client.js"
const gpu_router = express.Router();

let shortenedURL = ""


gpu_router.post("/shorten",async (req,res) => {
    let url = req.body.url;
    let len = req.body.len;

    try{
        console.log(req.body)
        let shortURL = await urlShortener(len);
        await client.hSet('linklite_hash' ,"" ,"");
        let check = await client.hGet("linklite_hash",shortURL);
        while(shortURL!== check){
            shortURL = urlShortener(len);
        }
        await client.hSet('linklite_hash',shortURL,url);
        shortenedURL = shortURL
        res.status(200).json({ shortURL });

    }catch(error){
        console.log(error);
        res.sendStatus(500).json("error generating shorten url");
    }
})

gpu_router.get("/", (req, res) => {
    res.send(shortenedURL);
});

export default gpu_router;