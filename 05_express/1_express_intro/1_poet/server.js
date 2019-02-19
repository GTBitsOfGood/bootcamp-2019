// YOUR CODE HERE
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send("Welcome to the Bootcamp Poetry API");
})

// app.use('/api/*', (req, res) => {
//   res.send("We couldn’t find any routes matching this endpoint");
// })
//* denotes any string (i.e. /api/anything, /api/unicorn, /api/p/r/a/t/h, etc.)

app.get('/api/poem', (req,res) => {
  const fs = require('fs');
  const poem = fs.readFileSync('./poem.txt', 'utf8');
})

app.post('/api/success', (req, res) => {
  res.json({success: true});
})

app.listen(3000);
