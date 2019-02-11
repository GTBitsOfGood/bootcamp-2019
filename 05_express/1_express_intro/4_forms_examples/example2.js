const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('example2', {text: req.query.text});
});

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;

app.get('/form', (req, res) => {
  res.render("example2", {query_username: req.query.username});
})

app.get('/form', (req,res) => {
  res.render("example2", {query_password: req.query.password});
})
