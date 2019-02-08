const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Bootcamp Poetry API')
})
app.get('/api/poem', (req, res) => {
    const fs = require('fs')
    const poem = fs.readFileSync('./poem.txt', 'uft8')
    res.send(poem)
})
app.post('/api/success', (req, res) => {
    res.json({success: true})
})
app.use('/api/*', (req, res) => {
    res.send("We couldn't find any routes matching this endpoint")
})
app.listen(3000)