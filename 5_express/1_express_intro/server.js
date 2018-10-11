// YOUR CODE HERE
const express = require('express');
const fs = require('fs');
const app = express();
const poem = fs.readFileSync('./poem.txt', 'utf8');
app.get('/', (req, res) => {
    res.send("Thos horiozons poet api v1.0")
})


app.get('/api/poem', (req, res) => {
    res.send(poem);
});

app.post('/api/success', (req, res) => {
    // const toSend = {
    //     "success": true
    // }
    res.json({success: true});
})
app.use('/api/*', (req, res) => {
    res.send("We couldn't find any routes matching this endpoint");
});

app.listen(3000);

console.log("listening on port 3000" )