// YOUR CODE HERE
const express = require('express');
const app = express();

app.get("/", function(request, response) {
    response.send("Welcome to Bootcamp Poetry API");
});

app.use("/api/*", function(request, response) {
    response.send("We couldn't find any routes matching this endpoint");
});

app.get("/api/poem", function(request, response) {
    const fs = require('fs');
    const poem = fs.readFileSync('./poem.txt', 'utf8');
    response.send(poem);
});

app.post("/api/success", function(request, response) {
    response.send(res.json({success: true}));
});

app.listen(3000);
