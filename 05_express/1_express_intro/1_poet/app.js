const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const bodyParser = require('body-parser');

app.engine("hbs", handlebars({
    extname: ".hbs"
}));
app.set("view engine", "hbs");

// app.get('/', (req, res) => {
//     res.render("first_template");
// });

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/greet', (req, res) => {
    //const name = req.query.name || "stranger";
    res.render("greet_me", {
        users_name: req.query.name
    });
});


app.get('/', (req, res) => {
    const skills = [
        {language: "JavaScript", level: "Expert"},
        {language: "HTML", level: "Rookie"},
        {language: "CSS", level: "Sucks"},
    ];
    res.render("first_template", {skills});
});

app.get('/', (req, res) => {
    res.send(`Welcome ${req.query.name}`);
});

app.get('/form', (req, res) => {
    res.render("first_form", {query_users_name: req.query.users_name});
})

app.get('/greet/:name', (req, res) => {
    res.send(`<h1>Welcome ${req.params.name}</h1>`);
});

app.get("/destination2", (req,res) => {
    res.render("greet_me", {
        users_name: req.body.users_name
    })
});

app.get('/second', (req, res) => {
    res.send("Bits of Good rocks!");
});
app.post('/second', (req, res) => {
    res.send("We got a post request!");
});
app.put('/second', (req, res) => {
    res.send("We got a put request!");
});
app.use('/any', (req, res) => {
    res.send("got a request, don't know");
});
app.listen(3000);
console.log("server is running!");
