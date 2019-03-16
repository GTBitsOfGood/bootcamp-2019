let express = require('express');
let path = require('path');
let exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
let data = require('./accounts');

let app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('example3');
});

app.post('/login', (req,res)=>{
    console.log(req.body);
    let username = false;
    let name;
    for (let i = 0; i < data.length; i++) {
        if (data[i].email == req.body.email && data[i].password == req.body.password) {
            username= true;
            name = data[i].first_name;
            break;
        }
    }
    console.log(username, name);
    res.render('login', {username, name});
})




// start the express app
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
