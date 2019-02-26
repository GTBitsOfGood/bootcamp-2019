const express = require('express'); 
const app = express();
const fs = require('fs');
const poem = fs.readFileSync('./poem.txt', 'utf8');

app.get("/", (req, res) => {
    res.send("Welcome to the Bootcamp PoetryAPI");
});

app.get("/api/poem", (req, res) => {
    res.send(poem);
});

app.get("/api/success", (req, res) => {
    const myObj = {success: true};
    res.json(myObj);//is this what it is supposed to look like
});

/*
app.use("/api/*", (req, res) => {
    res.send("We couldn't find any routes matching this endpoint");
});
*/

app.listen(3000);
