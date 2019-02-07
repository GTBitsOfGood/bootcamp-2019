module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b) {
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

//make counter function available outside of this function
module.exports.adder = adder;
module.exports.pi = pi;

// module.exports = {
//     adder: adder,
//     pi: pi
// };
