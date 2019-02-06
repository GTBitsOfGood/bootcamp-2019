const express = require('express');
const app = express();

app.get('/', (request, response) => {response.send("Welcome to Express");});

app.get('/second', (req, res) => {res.send("Bitsofgood");});

app.get('/third', (req, res) => {res.send("Nodemon");});

app.listen(3000);

console.log("Server is running");
