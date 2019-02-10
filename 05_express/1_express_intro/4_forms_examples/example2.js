const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  isMaleChecked = req.query.gender === "male"
  isFemaleChecked = req.query.gender === "female"

  res.render('example2', {
    out_name: req.query.name,
    out_username: req.query.username,
    out_password: req.query.password,
    out_gender: req.query.gender,
    out_checked: {isMaleChecked, isFemaleChecked}
  });
});

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
