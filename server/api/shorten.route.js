import urlShortener from "../utils/urlShortener.js";
import express from "express";
import client from "../utils/redis-client.js"
const gpu_router = express.Router();

let shortenedURL = ""

async function saveInRedis(slug, parent_url) {
    const store = await client.hSet('linklite_hash', slug, parent_url);
    console.log("Stored in Redis - ", store)
    return store;
}

async function getValueFromRedis(slug) {
    const value = await client.hGet("linklite_hash", slug); // Corrected to use hGet
    console.log("valueueuueueueeu -- ", value)
    return value;
}


gpu_router.post("/shorten",async (req,res) => {
    let url = req.body.url;
    let len = req.body.len;

    try{
        let slug;
        do {
            slug = await urlShortener(len);
        } while (await client.hGet("linklite_hash", slug)); // Regenerate if slug exists

        await saveInRedis(slug, url);
        res.status(200).json({ slug });

    }catch(error){
        console.log(error);
        res.sendStatus(500).json("error generating shorten url");
    }
})

// This is for a particular url
gpu_router.get("/shorten/:slug", async (req, res) => {
    const slug = req.params.slug;
    try {
    
        const val = await getValueFromRedis(slug);
        if (val) {
            console.log("get", val);
            res.status(200).json({ originalUrl: val });
        } else {
            console.log("Slug not found in Redis");
            res.status(404).json({ error: "URL not found" });
        }
    } catch (error) {
        console.error("Error in GET /shorten route:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// get all lists
gpu_router.get("/get_redisSlugs", async (req,res)=>{
    const list = await client.hGetAll("linklite_hash");
    res.status(200).json(list);
})

export default gpu_router;