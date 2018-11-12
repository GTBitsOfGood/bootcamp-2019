"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  gender: String,
  birthday: Date
},{
  toJSON:{
    virtuals:true
  },
  toObject:
  {
    virtuals:true
  }
});





var User = mongoose.model('User', userSchema);
function getAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
userSchema.virtual('age').get(function(){
  let age = getAge(this.birthday);
  return age;
})




module.exports = User;
