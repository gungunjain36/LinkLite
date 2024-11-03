import express from "express";
import dotenv from "dotenv";
import { redis } from "./utils/redis-client";

const PORT = process.env.PORT || 9000;

const app = express();

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})