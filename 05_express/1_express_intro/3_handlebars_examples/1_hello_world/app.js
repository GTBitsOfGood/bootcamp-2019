// Let's bring express into this file!
const express = require("express");
const handlebars = require("express-handlebars");
// Let's create a new express app
const app = express();

app.engine("hbs", handlebars({
    extname:".hbs";
});

app.set("view engine", "hbs");

app.get("/", (req, res)=> {
    res.render('hello.hbs')
})

app.get("/:error", (req,res)=>{
    res.render('errors', {
        error: req.params.error;
    });
});

app.listen(3000);