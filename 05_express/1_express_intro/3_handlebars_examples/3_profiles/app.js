var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname: 'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get(`/`, (request, response) => {
    let arr = data;
    response.render("index", {arr});
});

app.get(`/:gender`, (request, response) => {
    if (request.params.gender == "male") {
        let arr = Object.values(data).filter(student => student.gender == "Male");
        response.render("index", {arr});
    } else if (request.params.gender == "female") {
        let arr = Object.values(data).filter(student => student.gender == "Female");
        response.render("index", {arr});
    } else {
        response.render("error", {
            gender: request.params.gender
        });
    }
});


app.listen(3000);



