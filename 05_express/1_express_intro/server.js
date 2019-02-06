// YOUR CODE HERE
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.send("Welcome");
});
// app.get('/second', (req, res) =>{
//   res.send("woah");
// });
app.get('/second', (req, res) =>{
  res.send(`welcom ${req.query.name}`);
});
app.listen(2000);
console.log("server running");
