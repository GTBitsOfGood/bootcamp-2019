var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();
var data = require('./data');
app.engine('hbs', exphbs({extname:'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/male',(req,res)=>
{
   res.render('index',{data:data.filter(student =>{
    return student.gender === 'Male'})
})
})

app.use('/female',(req,res)=>
{
    res.render('index',{data:data.filter(student =>{
        return student.gender === 'Female'})
})})
app.use('/', (req,res)=>{
    res.render('index',{data}
    )  
})

app.listen(3000);

console.log("Server is running")



