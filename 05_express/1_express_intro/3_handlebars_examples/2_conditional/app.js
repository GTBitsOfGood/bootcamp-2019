const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:word', function(req, res) {
  const isEven = (req.params.word.length % 2 === 0 ? true : false);
  res.render('condition', {word: req.params.word, isEven: isEven});
});

app.listen(3000);

