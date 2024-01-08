// const express = require('express') - traditional way
import express from 'express';

const app = express();

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

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});