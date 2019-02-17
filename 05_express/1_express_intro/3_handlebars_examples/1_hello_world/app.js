const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

app.engine('hbs', handlebars( {
    extname: ".hbs"})
  )
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render('hello')
})

app.get('/:error', (req, res) => {
    res.send(`${req.params.error} page not found, did you enter the correct url?`)
})

app.listen(3000);