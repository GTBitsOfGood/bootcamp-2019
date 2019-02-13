const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const data = require('./accounts');


const app = express();

// view engine setup
app.engine('hbs', exphbs({extname: 'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('example3');
});

app.post('/login', function (req, res) {
    let fail = true;
    Object.values(data).forEach(item =>{ if(item.email == req.body.email
    && item.password == req.body.password) {
        res.render('login', {
            success: true,
            name: item.first_name
        });
        fail = false;
    }})
    if(fail) {
        res.render('login', {
            success: false
        });
    }
});

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
