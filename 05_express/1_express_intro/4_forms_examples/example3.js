const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fs = require('fs')

const app = express();

const rawdata = fs.readFileSync('accounts.json', 'utf8')
const accounts = JSON.parse(rawdata)

// view engine setup
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('example3', {
    email: (req.body) ? req.body.email : null,
    password: (req.body) ? req.body.password : null
  });
});

const findAccountIndex = (email, password) => {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].email === email && accounts[i].password === password)
      return i
  }
  return -1
}

app.post('/login', (req, res) => {
  let accountIndex = findAccountIndex(req.body.email, req.body.password)
  let firstName = accounts[accountIndex].firstName
  let isValidLogin = accountIndex > -1
  console.log(`hello ${req.body.email} ${req.body.password} ${firstName} ${isValidLogin}`)
  res.render('example3', {
    email: req.body.email,
    firstName: firstName,
    isValidLogin: isValidLogin
  })
})

// start the express app
const port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);

module.exports = app;
