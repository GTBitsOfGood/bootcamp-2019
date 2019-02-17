const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// Part 1
app.get('/', (req, res) => {
    res.render('example1', { my_input : req.query.my_input || 'Default header'})
})

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
