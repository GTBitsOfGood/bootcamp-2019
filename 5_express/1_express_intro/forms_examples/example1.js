var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// Part 1
// YOUR CODE HERE
app.get('/',(req,res)=>
{
    res.render('example1',{query_users_name:req.query.users_name})
})
app.get('/destination', (req,res)=>
{
    res.send(`Got ${req.query.users_name}`)
})
// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
