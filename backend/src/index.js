import dotenv from "dotenv";
// require('dotenv').config({path: './env'}) - traditional way

import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './env'
})

const app = express();
const port = process.env.PORT || 8000;

app.get('/api', (req, res) => {
    res.send('server is ready');
});

// list of Jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Coding Joke",
            "Content": "You are my Css to my HTML" 
        },
        {
            "id": 2,
            "title": "Life Joke",
            "Content": "Enjoy Life" 
        },
        {
            "id": 3,
            "title": "Badminton Joke",
            "Content": "Why its Badminton and not Goodminton" 
        }
    ];
    res.send(jokes);
})

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(` Server is running at port : ${port}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB conncetion failed !! ", error);
    })