// Initialize Node.js packages
const prompt = require('prompt-sync')();
const fs = require('fs');

console.log("PhoneBook to store your contacts !\n");
let phNum;

let opt = prompt("Type 0 to write in contacts\nType 1 to show the contacts entered in console\nEnter here: ");
if (opt == "0") {
    for (i = 0; i <= 25; i++) {
    
        // Get the number of lines in the txt file and stop the loop if there are more than or equal to 25 lines
        let filePath = process.argv[2]; 
        let fileBuffer = fs.readFileSync('./Code/Phonebook/contacts.txt'); 
        let to_string = fileBuffer.toString(); 
        let split_lines = to_string.split("\n"); 
        let amtLines = split_lines.length-1;
        if (amtLines >= 25) {
            console.log("Hey! You already have a full contact list.\nBreaking the process...");
            break;
        }
    
        // Max number contacts is 25
        if (i == 25) {
            console.log("You have reached maximum number of contacts.");
            break;
        }

        // Taking phone numbers as user input
        phNum = prompt("Enter phone number: ");
        phNum = Number(phNum);
    
        // Checking if the input entered is a number or not
        if (phNum == NaN) {
            console.log("This is not a number!");
            break;
        }
    
        // Function to check the number of digits present in the input
        const checkDigits = (n) => {
            var count = 0;
            if (n >= 1) ++count;
    
            while (n/10 >= 1) {
                n /= 10;
                ++count;
            }
    
            return count;
        }
        let digits = checkDigits(phNum);
        if (digits !== 10) {
            console.log("Phone numbers cannot be more or less than 10 digits.");
            break;
        }
    
        // Writing the numbers entered in the contacts.txt file
        fs.appendFile('./Code/Phonebook/contacts.txt', `${i + 1}. ${phNum}\n`, err => {
            if (err) throw err;
        });
    
        // Asking whether the user wants to add more phone numbers or not
        let chc = prompt("Do you want to continue (Type Y/N): ");
        chc = chc.toLowerCase();
        if (chc == "y") {
            continue;
        } else if (chc == "n") {
            break;
        } else {
            console.log("Wrong value. Exiting...");
            break;
        }
    }
} else if (opt == "1") {
    // Function to show the data entered in contacts.txt in javascript console
    fs.readFile('./Code/Phonebook/contacts.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log("\nData:\n");
        console.log(data);
    });
} else {
    console.log("Wrong input. Exiting Code...");
}

console.log("\nCode by Bedanta");
