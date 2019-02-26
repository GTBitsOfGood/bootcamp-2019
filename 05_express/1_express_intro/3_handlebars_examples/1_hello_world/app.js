const express = require('express')
const handlebars = require('express-handlebars')

const app = express();
app.listen(3000);

app.engine(
  "hbs",
  handlebars({
  extname: '.hbs'
})
);

app.set("view engine", "hbs");

app.get('/', (req, res) => {
  res.render("first_template");
})

app.get('/:error', (req, res) => {
  const error1 = req.params.error;
  res.render("second_template", {
    error: error1
  });
  //res.send(`${req.params.error} page not found, did you enter the correct url?`);
})
