import express from "express";
import dotenv from "dotenv";
import { redis } from "./utils/redis-client.js";
const shorten = require("./api/shorten.route.js");
const PORT = process.env.PORT || 9000;

const app = express();

app.get("/",(req,res) => {
    res.send("<h1>Hello World!</h1>")
})

app.use("/shorten",shorten);


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

