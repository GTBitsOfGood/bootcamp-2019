"use strict";
// The node builtin filesystem library.
let fs = require('fs');
let validator = require('validator')
//require columnify here


let JSON_FILE = 'data.json'
// If data.json file doesn't exist, create an empty one
ensureFileExists();
// This is where our Address Book is stored.
let data = JSON.parse(fs.readFileSync(JSON_FILE));




//the message that will be displayed  If no arguments are specified or if user types help
let helpString = "\n\tUsage: addressBook [options] [command]\n\n\n" +"\tOptions:\n" + "\t\thelp   Show this help message and quit"+"\n\n\n\tCommands:\n" + "\t\tadd       Create Contact\n" + "\t\tdisplay   Display all contacts in directory\n" + "\t\tupdate    Update existing contact\n"


let argv = process.argv
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
  let commands = ['add', 'update', 'display', 'delete', 'help'];
  for (let i = 0; i < commands.length; i++) {
    if (argv[0] === commands[i]) {
      return commands[i];
    }
  }
  return "";
}

//store the command and execute its corresponding function
let input = parseCommand()
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
  let output = columnify(data, {
    dataTransform: function(word) {
      if (parseInt(word) === -1) {
        return "-None-";
      } else {
        return word;
      }
    },
    config: {
      name: {
        headingTransform: function(heading) {
          return "CONTACT_NAME";
        }
      },
      number: {
        headingTransform: function(heading) {
          return "PHONE_NUMBER";
      }
    }
  }
})

console.log(output);

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
  process.argv.splice(0,1);
  if (process.argv.length == 0) {
    console.log("Invalid contact format");
    return;
  }
  let name = process.argv[0];
  let number = process.argv[1] || -1;
  let exists = data.find(function(contact){
    return contact.name === name
  });
  if (!checkForLetters(name)) {
    console.log("Name must only contain letters.")
    return;
  } else if (exists) {
    console.log("Name already exists.");
    return;
  } else if (argv.length > 1 && !checkForNumbers(number)) {
    console.log("Number must only contain numbers");
    return;
  }
  data.push({
    name: name,
    number: parseInt(number)
  });
  console.log("Added new contact " + name + ", " + number + ".");
}

//if only letters in text return
function checkForLetters(text) {
  return !/[^a-z]/i.test(text);
}

//if only numbers return
function checkForNumbers(text) {
  return !/[^0-9]/i.test(text);
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
  process.argv.splice(0,1);
  let contactName = argv[0];
  let newContactName = argv[1];
  let foundName = data.find(function(contact){
    return contact.contactName === contactName;
  });
  if (argv.length < 2) {
    console.log("Incorrect Format");
  } else if (!foundName) {
    console.log("No contact found");
  } else if (checkForLetters(newContactName)) {
    console.log("Updated name to " + newContactName);
    foundName.contactName = newContactName;
  } else if (checkForNumbers(newContactName)) {
    console.log("Updated number to " + newContactName);
    foundName.number = parseInt(newContactName);
  } else {
    console.log("Incorrect Format");
  }
}


//BONUS Implement deleteContact
function deleteContact(){
  process.argv.splice(0,1);
  let contactName = argv[0];
  let foundName = data.find(function(contact){
    return contact.contactName === contactName;
  });
  if (!foundName) {
    console.log('No contact found');
  } else {
    console.log('Removed ' + foundName);
    data = data.filter(function(word) {
      return word.contactName !== contactName;
    });
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
