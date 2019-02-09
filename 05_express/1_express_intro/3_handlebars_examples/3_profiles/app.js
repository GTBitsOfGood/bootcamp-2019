var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('index', {filter: 'other', filtered: data});
});
app.get('/:filt', (req, res) => {
    console.log(req.params.filt === "male");
    isMale = req.params.filt.toLowerCase() === "male";
    filtered = data.filter((item) => {
        if (req.params.filt.toLowerCase() === "male" | req.params.filt.toLowerCase() === "female") {
            return item["gender"].toLowerCase() === req.params.filt.toLowerCase();
        }
        else return true;
    });
    res.render('index', {filter: req.params.filt, filtered, isMale: isMale});
});

// YOUR CODE HERE

app.listen(3000);



