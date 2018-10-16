var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser')
let account = require('./accounts')

var app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/login', (req,res)=>
{
  res.render('example3', {
    query_name: account.filter((v)=>
    {
      return v.password === req.body.Password && v.email === req.body.Email
    })
  }
)
})

app.get('/', function(req, res) {
  res.render('example3')
})



// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
