// YOUR CODE HERE
const express = require("express");
const app = express();
const fs = require('fs');
const poem = fs.readFileSync('./poem.txt', 'utf8');

app.get("/", (request, response) => {
    response.send("The Horizons Poet API v1.0");
});
app.get("/api/*", (request,response) => {
    response.send("We couldn't find any routes matching this endpoint");
});
app.use("/api/poem", (request, response) => {
    var fs = require('fs');
    var poem = fs.readFileSync('./poem.txt', 'utf8');
    response.send(poem);
});
app.post("/api/success", (request, response) => {
    response.send(res.json({success: true}));
});
app.listen(3000);
