"use strict";

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Express setup
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// MONGODB SETUP HERE

// SESSION SETUP HERE

// PASSPORT LOCALSTRATEGY HERE

// PASSPORT SERIALIZE/DESERIALIZE USER HERE HERE

// PASSPORT MIDDLEWARE HERE

// YOUR ROUTES HERE

module.exports = app;
