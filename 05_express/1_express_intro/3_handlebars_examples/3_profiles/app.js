const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render("students", {students: data});
});

app.get('/male', (req, res) => {
    res.render("students", {males: data})
});

app.listen(3000);



