let first = require('../../b/one.js')
let second = require('../two.js')
let third = require('../../b/three.js')
let fourth = require('./four.js')
module.exports = {
    logger: function(val) { console.log("Plural of moose is not " + val); },
    value: 'meese',
    answer: _=> {
    	first.first()
    	
    	first.second()
    
    	second.twoFunc()
    	console.log(fourth.horizons)
    }
}