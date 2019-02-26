// YOUR CODE HERE
const express = require('express')
const app = express();
app.listen(3000);

app.get('/', (req, res) => {
  res.send("Welcome to the Bootcamp Poetry API");
});
app.get('/api/poem', (req, res) => {
  res.send(poem);
});


app.post('/api/success', (req, res) => {
  res.send(res.json({success: true}));
});

app.use('/api/*', (req,res) => {
  res.send("We couldn’t find any routes matching this endpoint");
});

const fs = require('fs');
const poem = fs.readFileSync('./poem.txt', 'utf8');
