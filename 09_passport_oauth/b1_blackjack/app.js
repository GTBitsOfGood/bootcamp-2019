#!/usr/bin/env node
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var exphbs = require('express-handlebars');
var app = express();
var port = '3000'
var expressValidator = require('express-validator');

// Set your MongoDB connect string through a file called
// config.js or through setting a new environment variable
// called MONGODB_URI!
var db = process.env.MONGODB_URI || require('./config').db;

var mongoose = require('mongoose');
mongoose.connect(db);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.set('port', port);
app.listen(port);