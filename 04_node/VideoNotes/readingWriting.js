const fs = require('fs');

//synchronous method: if any code is underneath, it will fully read file
//before it moves on
const readMe = fs.readFileSync('README.txt', 'utf8');

fs.writeFileSync('writeMe.txt', readMe);

//asynchronous: code below would still fire while reading data
fs.readFile('README.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe2.txt', data);
})
console.log('test');
