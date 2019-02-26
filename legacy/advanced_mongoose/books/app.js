"use strict";

const fs = require('fs');
const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const parse = require('csv-parse');
const _ = require('underscore');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(require('./connect'));

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: {
    prev: function(page) {
      // YOUR CODE HERE
    },
    next: function(page) {
      return `<a href="/?page=${page + 1}">Next page</a>`;
    },
  }
}));app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// Enable mongodb debug messages!
mongoose.set('debug', true);

var Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  }
});

app.get('/', function(req, res) {
  var page = parseInt(req.query.page) || 0;
  Book.find()
    // YOUR CODE HERE sort books and paginate
    .exec(function(err, books) {
      res.render('index', {
        page: page,
        hasNext: true, // YOUR CODE HERE only return true if there's a next page
        books: books
      });
    });
});

app.get('/import/books', function(req, res) {
  var input = fs.createReadStream(path.join(__dirname, 'books.csv'));
  var parser = parse({columns: true});
  var books = [];
  var started = 0;
  var completed = 0;
  var inputDone = false;

  function finalize() {
    if (inputDone && completed === started) {
      res.redirect('/');
    }
  }

  function comp(err) {
    if (err) {
      console.error(err);
    }
    completed++;
    finalize();
  }

  input.pipe(parser);

  parser.on('readable', function() {
    var record;
    while (record = parser.read()) {
      started++;
      books.push(new Book({
        title: record.Title,
        author: record.Author
      }));
    }
  });

  parser.on('finish', function(){
    console.log('Done processing. Processed %s lines.', started);
    inputDone = true;
    finalize();
    books = _.shuffle(books);
    books.map(function(book) {
      book.save(comp);
    });
  });
});

app.listen(3000);
