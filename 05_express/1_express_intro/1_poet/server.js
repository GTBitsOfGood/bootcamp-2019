// YOUR CODE HERE
const express = require('express');
const app = express();
const fs = require('fs');
const poem = fs.readFileSync('./poem.txt', 'utf8');
app.get("/", (request, response) => {
    response.send("Welcome to the Bootcamp Poetry API");
});
app.use('/api/*', (request, response) =>{
   response.send("We couldn't find any routes matching this endpoint");
});
app.get('/api/poem', (request, response) =>{
    response.send(poem);
});
app.post('/api/success', (request, response) => {
    response.json({success: true});
})
app.listen(3000);
