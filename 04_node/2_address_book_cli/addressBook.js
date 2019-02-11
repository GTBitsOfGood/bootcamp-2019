"use strict";
// The node builtin filesystem library.
const fs = require('fs');
const validator = require('validator')
//require columnify here
const jsonfile = require('jsonfile');
// var file = 'data.json';


// jsonfile.writeFileSync(JSON_FILE, [
//     {
//         "name": "Moose",
//         "number": 123
//     },
//     {
//         "name": "Ricky",
//         "number": -1
//     }
// ]);
// If data.json file doesn't exist, create an empty one
ensureFileExists();
// This is where our Address Book is stored.
// var data = JSON.parse(fs.readFileSync(file));

// console.log(data);
const JSON_FILE = 'data.json'
// If data.json file doesn't exist, create an empty one
ensureFileExists();
// This is where our Address Book is stored.
const data = JSON.parse(fs.readFileSync(JSON_FILE));




//the message that will be displayed  If no arguments are specified or if user types help
const helpString = "\n\tUsage: addressBook [options] [command]\n\n\n" +"\tOptions:\n" + "\t\thelp   Show this help message and quit"+"\n\n\n\tCommands:\n" + "\t\tadd       Create Contact\n" + "\t\tdisplay   Display all contacts in directory\n" + "\t\tupdate    Update existing contact\n"



const argv = process.argv
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
  //   console.log(argv.length);
    if (argv.length === 0) {
      // console.log('a');
      return '';
    }
    else {
      return argv[0];
    }

}

//store the command and execute its corresponding function
const input = parseCommand()
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
    let columnify = require('columnify');
    let output = columnify(data, {
        dataTransform: function (data) {
            if (data === '-1') {
                data = '-None-';
            }
            return data;
        },
        config: {
            name: {
                headingTransform: function (heading) {
                    return "CONTACT_NAME"
                }
            },
            number: {
                headingTransform: function (heading) {
                    return "PHONE_NUMBER"
                }
            }
        }
    });
    console.log(output); //UNCOMMENT
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
//     console.log(argv[1]);
    if (argv.length === 1 || !/^[a-zA-Z]+$/.test(argv[1])) {
        // console.log('a');
        console.log('Invalid contact format');
    } else if (argv.length > 2 && isNaN(argv[2])) {
        // console.log('b');
        console.log('Invalid contact format');
    }else if (argv.length > 1) {
        var hasMatch =false;
        for (var index = 0; index < data.length; ++index) {
            var name = data[index];
            if(name.Name === argv[1]){
                hasMatch = true;
                break;
            }
        }
        if (hasMatch) {
            // console.log('c');
            console.log("${argv[1]} already in the Address Book");
        } else if (argv.length > 2) {
            // console.log('d');
            let l = data.length;
            data[l] = {};
            data[l]['name'] = argv[1];
            data[l]['number'] = Number(argv[2]);
            // console.log('a');
            // console.log(data);
            jsonfile.writeFileSync(JSON_FILE, data);
            // console.log(data);
            console.log("Added contact ${argv[1]} , and number: ${argv[2]}");
        } else if (argv.length === 2) {
            let l = data.length;
            data[l] = {};
            data[l]['name'] = argv[1];
            data[l]['number'] = -1;
            jsonfile.writeFileSync(JSON_FILE, data);
            console.log("Added contact Buzz");
        }
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
    if (argv.length === 1 || !/^[a-zA-Z]+$/.test(argv[1])) {
        console.log("Invalid");
    }
    var hasMatch =false;
    for (var index = 0; index < data.length; ++index) {
        var name = data[index];
        if(name.name === argv[1]){
            // console.log('as');
            hasMatch = true;
            if (isNaN(argv[2]) && argv[1].match(/[a-z][A-Z]/i)) {
                name.name = argv[2];
            } else {
                name.number = Number(argv[2]);
            }
            break;
        }
    }
    if (hasMatch) {
        jsonfile.writeFileSync(JSON_FILE, data);
        console.log("update value for ${args[1]}");
    } else {
        console.log("No contact found");
    }
    // console.log(data);
}


//BONUS Implement deleteContact
function deleteContact(){
    //YOUR CODE HERE
    var hasMatch =false;
    for (var index = 0; index < data.length; ++index) {
        var name = data[index];
        if(name.name === argv[1]){
            // console.log('as');
            hasMatch = true;
            // console.log(data[name.name]);
            // delete name.name;
            // delete name.number;
            delete data[index];
            data = data.filter((obj) => {
                if (obj != null) {
                    return obj
                }
            });
            // console.log(data);
            jsonfile.writeFileSync(JSON_FILE, data);
            break;
        }
    }
    if (!hasMatch) {
        console.log("No contact found");
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
