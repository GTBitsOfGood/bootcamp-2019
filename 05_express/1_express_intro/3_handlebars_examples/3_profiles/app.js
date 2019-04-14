const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', { students: data })
})

app.get('/male', (req, res) => {
    res.render('index', { students: data.filter(student => student.gender === 'Male') })
})

app.get('/female', (req, res) => {
    res.render('index', { students: data.filter(student => student.gender === 'Female') })
})

app.listen(3000);


