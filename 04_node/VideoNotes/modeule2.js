// ./ means in the current directory
const stuff = require('./modules');
//require means we can use this
console.log(stuff.counter(['shaun', 'crystal', 'ryan']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));
