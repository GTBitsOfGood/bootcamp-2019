var express = require("express");

var app = express();

app.get("/", function(request, response) {
  response.send("Hello World");
});

app.get('/:error', (req, res) => {
  res.send(`<error> page not found, did you enter the correct url?`);
});

app.listen(3000);