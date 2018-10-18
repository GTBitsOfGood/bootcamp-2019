"use strict";
// The node builtin filesystem library.
var fs = require('fs');
var validator = require('validator')
//require columnify here
var columnify = require('columnify')

var JSON_FILE = 'data.json'
// If data.json file doesn't exist, create an empty one
ensureFileExists();
// This is where our Address Book is stored.
var data = JSON.parse(fs.readFileSync(JSON_FILE));




//the message that will be displayed  If no arguments are specified or if user types help
var helpString = "\n\tUsage: addressBook [options] [command]\n\n\n" +"\tOptions:\n" + "\t\thelp   Show this help message and quit"+"\n\n\n\tCommands:\n" + "\t\tadd       Create Contact\n" + "\t\tdisplay   Display all contacts in directory\n" + "\t\tupdate    Update existing contact\n"


var argv = process.argv
//console.log(process.argv) //UNCOMMENT TO SEE WHAT PROCESS.ARGV IS BEFORE WE SPLICE
argv.splice(0,2); //remove 'node' and path from args, NOTE: splicing modifies process.argv, so you will not need to do this again!


//------------PART1: PARSING COMMAND LINE ARGUMENTS------------------------

/**
* Implement parseCommand()
* Using process.argv, find and return the command. If there was no command return "".
* The command will be the first argument the user types. The possible commands are add, update, display, delete, help
* $ node addressBook.js add Moose 123   ----> 'add'
* $ node addressBook.js                ----> ''
*/
function parseCommand() {
  // YOUR CODE HERE
  let x = [...argv];
  if (x.length  === 0) {
    return "";
  }
  return x[0];
}

//store the command and execute its corresponding function
var input = parseCommand()
switch(input){
  case "add":
    addContact();
    break;
  case "update":
    updateContact();
    break;
  case "delete":
    deleteContact()
    break;
  case "display":
    displayContacts();
    break;
  default:
    console.log(helpString); //if command = 'help' or invalid command, print help
}

//----------------- PART 2 'display' command---------------------//

/**
*
* Implement displayContacts()
* Display the contacts in the address book in the format specified in the readme (HERE IS WHERE WE USE COLUMNIFY NPM MODULE)
* If the contact does not have a phone number listed, you should display "-None-" in the PHONE_NUMBER fIELD
*
* Do not return anything, console.log() the contacts
*
*/
function displayContacts(){
    //YOUR CODE HERE

    // console.log(columnify(data)); //UNCOMMENT

}



//----------------- PART 3 'add' command---------------------//
/**
* Implement addContacts()
* This is a function that is called to create a new contact.
* Calling `node add contactName contactNumber ` must call our function addContact.
* it should get the name and number of the Contact from process.argv
* You should only create a new contact if a name is provided that doesnt already exist inside your address book (no duplicate contacts)
* and if the name consists of only letters and the number consists of only numbers
* name: string, number: number
* if no number is provided, store -1 as their number
*/
function addContact() {
// YOUR CODE HERE
  let name = argv[1];
  let number = argv[2];
  if (name.search(/\d/g) > -1) {
    return;
  }
  let numchanged = false;
  if (number.search(/[a-zA-Z]/g) > -1 || number.length === 0) {
    number = -1
  } else {
    number = +number
  }
  
  const contact = {name,number}
  let iscontained = -1;
  data.forEach((element, index) => {
    if (element.name === contact.name) {
      iscontained = index;
    }
  });
  if (iscontained === -1) {
    data.push(contact)
  } else {
    data[iscontained] = contact;
  }
}


//----------------- PART 4 'update' command---------------------//
/**
* Implement updateContact()
* This is a function that is called to update an existing contact.
* Calling `node addressBook.js update contactName newContactNumber ` updates the number of contact with name contactName to be newContactNumber.
* Calling `node addressBook.js update contactName newContactName ` updates the name of contact with name contactName to be newContactName.
* it should get the name and update field of the Contact from process.argv
* You should only update a contact if it exists inside your address book and the new name or number is valid
*
*/
function updateContact(){
// YOUR CODE HERE
  let temp = -1;
  let contactName = argv[1]
  let newContactNumber = argv[2]
  let newContactName = "";
  if (contactName.search(/\d/g) > -1) {
    return;
  }
  if (newContactNumber.search(/[a-zA-Z]/g) === -1) { // if there are no letters, its a number
    newContactNumber = +newContactNumber
    console.log(newContactNumber)
    const newContact = {
      name: contactName,
      number: newContactNumber
    }
    console.log("Changing the number")
    data.forEach((element, index) => {
      if(element.name === contactName) {
        temp = index;
      }
    });
    if (temp > -1) {
      data[temp] = newContact; 
    }
  } else {
    if(newContactNumber.search(/\d/g) === -1) {
      // if there are no numbers in the name
      data.forEach((element, index) => {
        if(element.name === contactName) {
          temp = index;
        }
      });
      if (temp > -1) {
        const newContact = {
          name: newContactNumber,
          number: data[temp].number
        }
        data[temp] = newContact; 
      }
    }
  }

}


//BONUS Implement deleteContact
function deleteContact(){
    //YOUR CODE HERE
    const nameToDelete = argv[1];
    console.log("Before: \n",data)
    let temp = -1;
    data.forEach((element, index) => {
      if(element.name === nameToDelete) {
        temp = index;
      }
    });
    if (temp > -1) {
      let pt1 = data.slice(0, temp);
      let pt2 = data.slice(temp+1);
      data = pt1.concat(pt2);
    }

}



// ---Utility functions---

// We use these functions to read and modify our JSON file.
function writeFile(data) {
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
}

function ensureFileExists() {
  if (! fs.existsSync(JSON_FILE)) {
    writeFile([]);
  }
}


// This command writes  our tasks to the disk
writeFile(data);
