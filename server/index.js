import express from "express";
import dotenv from "dotenv";
// import { redis } from "./utils/redis-client.js";
import shortenRoute from './api/shorten.route.js';
// import shorten from "./api/shorten.route.js";
const PORT = process.env.PORT || 9000;

const app = express();
app.get("/",(req,res) => {
    res.send("<h1>Hello World!</h1>")
})


app.use("/",shortenRoute);
// app.use("/shoten",shortURL);

  

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

