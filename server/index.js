import express from "express";
import dotenv from "dotenv";
// import { redis } from "./utils/redis-client.js";
import gpu_router from "./api/shorten.route.js";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 9000;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res) => {
    res.send("<h1>Hello World!</h1>")
})


app.use("/gungun", gpu_router);
// app.use("/shoten",shortURL);

  


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

