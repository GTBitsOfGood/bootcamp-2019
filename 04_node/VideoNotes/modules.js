//we split code up into modules for different functionality
//then call upon the modules when we need them

const counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}

const adder = function(a,b) {
  //template string uses backticks
  //can execute js expressions within template strings
  return `The sum of these two numbers is ${a+b}`;
}

const pi = 3.14

//allowing part of this module to be exported
//exports is an object
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

//more efficient way to do this
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
