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
    const males = data.filter(current => current.gender === "Male");
    res.render("students", {students: males})
});

app.get('/female', (req, res) => {
    const females = data.filter(current => current.gender === "Female");
    res.render("students", {students: females});
})
app.listen(3000);



