// YOUR CODE HERE
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`Welcome ${req.query.name}`);
});


app.get('/status/:code', (req, res) => {
    res.sendStatus(req.params.code);
});

app.get('/greet/:name', (req, res) => {
    res.send(`welcome ${req.params.name}`);
});

app.get('/api/poem', (req, res) => {
    const fs = require('fs');
    const poem = fs.readFileSync('./poem.txt', 'utf8');
    res.send(poem);
});

app.get('/api/*', (req, res) => {
    res.send("We couldn't find any routes matching this endpoint");
});





app.post('/api/success', (req, res) => {
    res.json({success: true});
});

console.log('Starting');

app.listen(3000);
