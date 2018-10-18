// Let's bring express into this file!
const express = require('express');

// Let's create a new express app
const app = express();

// Example route:

app.get('/', (req, res) => {
    res.send(`Welcome ${req.query.name}`);
})
// app.get('/greet/:name', (req, res) => {
//     res.send(`Greet ${req.params.name}`);
// });
// app.get('/second', (req, res) => {
//   res.send("BoG rocks");  
// })

// // app.get('/third', (req, res) => {
// //     res.send("nodemon gang");
// // })
// app.post('/second', (req, res) => {
//     res.send("BoG posts");  
//   })
// app.put('/second', (req, res) => {
//     res.send("BoG puts");  
// })
// app.delete('/second', (req, res) => {
//     res.send("BoG deletes");  
// })

// app.use('/any', (req, res) => {
//     res.send("God a req, dont know");
// })
// This creates an Express route at http://localhost:3000
app.listen(3000)

// Create a route that listens to /hello and takes one query parameter
// name and responds with 'Hello there NAME!'
// You can access the query parameter 'name' via request.query.name.

// YOUR CODE HERE
app.get('/hello', (req, res) => {
    res.send(`<h1>Hello there ${req.query.name}</h1>`);
})


// Start the server listening on port 3000.
console.log("Server is running")
