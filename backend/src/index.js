// require('dotenv').config({path: './env'}) - traditional way

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './env'
})
const app = express();

const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(` Server is running at port : ${port}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB conncetion failed !! ", error);
    })