// Initialize node module "prompt-sync"
const prompt = require('prompt-sync')();

console.log("Rock Paper Scissor Game");
let numGen;

while (true) 
{
    // Generate random number between 0 to 2 (This is the computer choice)
    numGen = Math.floor(Math.random() * 3);
    
    console.log(`\nType rock or r to choose \"Rock\"\nType paper or p to choose \"Paper\"\nType scissor or s to choose \"Scissor\"`);
    // User inputs a value as stated above
    let a = prompt("Enter here: ");
    a = a.toLowerCase();   // Changing the value (string) to lowercase for convinience
    
    // If the user chooses rock the following code will be executed
    if (a == 'r' || a == 'rock') {
        // To execute the choice taken by the computer
        if (numGen == 0) {
            console.log("\nYou tied. The computer chose rock as well as you also chose rock.");
        } else if (numGen == 1) {
            console.log("\nYou lost. The computer chose paper while you chose rock.");
        } else if (numGen == 2) {
            console.log("\nYou won. The computer chose scissors while you chose rock.");
        }
    } 
    // If the user chooses paper the following code will be executed
    else if (a == 'p' || a == 'paper') {
        if (numGen == 0) {
            console.log("\nYou won. The computer chose rock while you chose paper.");
        } else if (numGen == 1) {
            console.log("\nYou tied. The computer chose paper while you also chose paper.");
        } else if (numGen == 2) {
            console.log("\nYou lost. The computer chose scissors while you chose paper.");
        }
    } 
    // If the user chooses scissor the following code will be executed
    else if (a == 's' || a == 'scissor') {
        if (numGen == 0) {
            console.log("\nYou lost. The computer chose rock while chose scissor.");
        } else if (numGen == 1) {
            console.log("\nYou won. The computer chose paper while you chose scissor.");
        } else if (numGen == 2) {
            console.log("\nYou tied. The computer chose scissors while you also chose scissor.");
        }
    } 
    // If any other value is given, it will show the following error code
    else {
        console.log(`\nError:\nPut correct values. Exiting Code...`);
    }

    // Asking whether the user wants to continue or not
    let cont = prompt("Do you want to continue (Type Yes/No)? ");
    cont = cont.toLowerCase();
    if (cont == "yes" || cont == "y")
    {
        continue;
    } else if (cont == "no" || cont == "n")
    {
        break;
    } else
    {
        console.log("Wrong Input. Exiting Code...");
        break;
    }
}

console.log("Code by Bedanta");
