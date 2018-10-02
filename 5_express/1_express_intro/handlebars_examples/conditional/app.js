var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:word', function(req, res) {
  var isEven = (req.params.word.length % 2 === 0 ? true : false);
  res.render('condition', {word: req.params.word, isEven: isEven});
});

app.listen(3000);

