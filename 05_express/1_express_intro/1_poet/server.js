const express = require('express')
const app = express()
app.get('/', (request, res) => {
    res.send("Welcome to the Bootcamp Poetry API");
});
app.get('/api/poem', (request, res) => {
    const fs = require('fs');
    const poem = fs.readFileSync('./poem.txt', 'utf8');
    res.send(poem);
});

app.post('/api/success', (request, res) => {
    res.json({success: true});
});
app.use('/api/*', (request, res) => {
    res.send("We couldn’t find any routes matching this endpoint");
});

app.listen(3000);