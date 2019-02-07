var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
let data = require('./accounts');

var app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());


app.get('/', function(req, res) {
  res.render('example3');
});

app.post('/login', (req, res) => {
  let boo = false;
  let name = "";
  data.forEach((e) => {
    if (e.email === req.body.email && e.password ===  req.body.password) {
      boo = true;
      name = e.first_name;
    }
  });
  let isCorrect = boo;
  res.render('extra', {
    email: req.body.email, password: req.body.password, isCorrect, name
  })
});


// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
