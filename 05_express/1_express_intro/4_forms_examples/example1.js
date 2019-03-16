let express = require('express');
let path = require('path');
let exphbs = require('express-handlebars');

let app = express();

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// Part 1
// YOUR CODE HERE
app.get("/form" , (req, res) => {
    res.render("example1", {queryUserInput : req.query.input});
});

// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
