const express = require("express");
const handlebars = require("express-handlebars")

const app = express();

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs"
  })
);

app.set("view engine", "hbs");

app.get("/", function(request, response) {
  response.render('first_template');
});

app.get('/:error', (req, res) => {
  const error = req.params.error;
  res.render('page', {
    page_name: error
  });
});

//app.get('/greet', (req, res) => {
  //const name = req.query.name || "stranger";
  //res.send(`Welcome ${name}!`);
//});

app.listen(3000);