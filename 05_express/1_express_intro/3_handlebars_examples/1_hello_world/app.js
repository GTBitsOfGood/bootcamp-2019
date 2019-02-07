const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.engine("hbs", handlebars({
    extname: ".hbs"
}));
app.set("view engine", "hbs");

app.get('/', (req, res) => {
    res.render("greet_me");
});

app.get('/:error', (req, res) => {
    const error = req.query.error || "stranger";
    res.render("error_route", {
        error_msg: error
    });
});

app.listen(3000);