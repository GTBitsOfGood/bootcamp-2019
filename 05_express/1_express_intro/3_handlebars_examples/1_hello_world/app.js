const handlebars = require("express-handlebars");
const express = require("express");

const app = express();

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs"
    })
)
;

app.set("view engine", "hbs");

app.get("/", (request, response) => {
    response.render("greet");
});

app.get(`/:page`, (request, response) => {
    response.render("error", {
        page: request.params.page
    });
});

app.listen(3000);
