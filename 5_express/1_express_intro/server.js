const express = require('express')
let app = express()

app.get('/',(req,res)=>
    {
        res.send("The Horizons Poet API v1.0")
    })
app.get("/api/poem",(req,res)=>
{
 let fs = require('fs')
 let poem = fs.readFileSync('./poem.txt','utf8')
 res.send(poem)  
})



app.get("/api/success",(req,res)=>
{
    res.json({"success":true})
})

app.use('/api/*',(req,res)=>{
    res.send("We couldn't find any routes matching this endpoint")
})

app.listen(3000)

console.log("Server is running")
