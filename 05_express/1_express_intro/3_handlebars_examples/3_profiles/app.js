const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// YOUR CODE HERE

app.listen(3000);



