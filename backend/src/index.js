import dotenv from "dotenv";
// require('dotenv').config({path: './env'}) - traditional way

import connectDB from "./db/index.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import router from "./routes/userRoutes.js"
import { userRoute } from "./routes/userRoutes.js";
// import { User } from "./models/userModel.js";

dotenv.config({
    path: './.env'
})

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

// const routes = require("./routes/userRoutes.js")

app.use('/api', userRoute);


// Get Route

app.get('/api', (req, res) => {
    res.send('server is ready');
});

// list of Jokes (Get Route)

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Coding Joke",
            "Content": "Why Developers code in Dark mode. Because light attracts bug." 
        },
        {
            "id": 2,
            "title": "About Life",
            "Content": "The Happiest person don't have the best of everything, they make the best from everything." 
        },
        {
            "id": 3,
            "title": "Badminton Joke",
            "Content": "Why it's called Badminton and not Goodminton?" 
        }
    ];
    res.send(jokes);
})

// MongoDB 

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(` Server is running at port : ${port}`);
        })
    })
    .catch((error) => {
        console.log("MongoDB conncetion failed !! ", error);
    })