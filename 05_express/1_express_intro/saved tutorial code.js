const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send("Welcome to Express");
});

app.get('/second', (req, res) => {
    res.send("Bits of Good rocks!");
});

app.post('/second', (req, res) => {
    res.send("We got a post request!");
});

app.use('/any', (req, res) => {
    res.send("Got a request, don't know what type.");
});

app.listen(3000);

console.log("Server is Running");