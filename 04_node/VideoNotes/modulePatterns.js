module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
}

module.exports.adder = function(a,b) {
  //template string uses backticks
  //can execute js expressions within template strings
  return `The sum of these two numbers is ${a+b}`;
}

module.exports.pi = 3.14
