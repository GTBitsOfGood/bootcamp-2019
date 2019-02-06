const express = require('express');
const handlebars = require('express-handlebars');


app = express();
app.engine("hbs", handlebars({extname: ".hbs"}));
app.set("view engine", "hbs");



app.get('/', (req, res) => {
    res.render('hello_world');
});

app.get('/:error', (req, res) => {
    res.render('error', {error: req.params.error});
});

app.listen(3000);
