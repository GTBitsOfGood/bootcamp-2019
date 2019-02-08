const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome ${req.query.name}`);
});

app.get('/greet/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`);
});

app.get('/moo', (req, res) => {
    res.status(201).send(`Welcome to Express`);
});

app.get('/status/:code', (req, res) => {
    res.sendStatus(req.params.code);
});

app.listen(3000);

console.log("Server is Running");