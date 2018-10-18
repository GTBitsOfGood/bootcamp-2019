"use strict";

var pets = require('./pets.json').map(function(pet) {
  pet._id = pet._id['$oid'];
  pet.owner = pet.owner['$oid'];
  return pet;
});

console.log(JSON.stringify(pets, null, 2));
