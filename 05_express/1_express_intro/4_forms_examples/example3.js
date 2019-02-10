const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
=======

const app = express();
>>>>>>> master

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

application_data = JSON.parse(fs.readFileSync('./accounts.json', 'utf8'));
app.get('/', (req, res) => {
  res.render('example3', {
    out_username: req.query.username,
    out_password: req.query.password,
  });
});
app.post('/login', (req, res) => {

  const userData = {};
  let isValidAccount = false;
  for (let i = 0; i < application_data.length; i++) {
    console.log(application_data[i]);
    if (application_data[i]["email"] === req.body.username & application_data[i]["password"] === req.body.password) {
      isValidAccount = true;
      userData.first_name = application_data[i]["first_name"];
    }
  }

  res.render('login', {
    name: userData.first_name,
    isValidAccount
  });
});

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
