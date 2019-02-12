const express = require ('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'handlebars'));

app.engine(
    "hbs",
    handlebars ({
        extname: ".hbs"
    })
    );
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("hello_template");
});

app.get("/:error", (req, res) => {

    res.render(`${req.params.error} page not found, did you enter the correct url?`);
});

app.listen(3000);