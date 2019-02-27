const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine("hbs", handlebars({
  extname: ".hbs"
}))

app.set("view engine", "hbs");

app.get('/', (req, res) => {
  res.render('first_template');
});

app.get('/greet', (req, res) => {
  const name = req.query.name || "stranger";
  res.render('greet_me', {
    users_name: req.query.name
  });
});


app.listen(3000);
