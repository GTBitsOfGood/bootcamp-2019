const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine("hbs", handlebars({
  extname: ".hbs"
}))

app.set("view engine", "hbs");

app.get('/', (req, res) => {
  res.render('hello.hbs');
});

app.get('/:error', (req, res) => {
  const error1 = req.params.error;
  res.render('errors', {
    error: error1
  });
});


app.listen(3000);
