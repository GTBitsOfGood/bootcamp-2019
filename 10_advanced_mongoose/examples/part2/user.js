"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  age:Number,
  gender: String,
  birthday: Date
},{
  toJSON:{
    virtuals:true
  }
});





var User = mongoose.model('User', userSchema);
let schemaVirtual = userSchema.virtual('age')
schemaVirtual.get((age)=>{
  return this.age
})
schemaVirtual.set((age)=>{
  var ageDifMs = Date.now() - this.birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
})



module.exports = User;
