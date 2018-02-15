// Import word.js functionality
var Wordy = require('./word.js');

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// global variables 
var turns = 10;

var messages = {
    guess: 'Guess a letter!',
    win: 'You win!',
    lose: 'Game over!',
};
// var userLetter = process.argv[2];
var word;
var displayString;
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter"
        },
    ]).then(answers => {
        checkWord(answers.letter);
    })
}

function newWord() {
    // array to store list of words 
    var words = ["cat", "dog", "cow", "reindeer"];
    // sets global var words to a random word
    word = new Wordy(words[Math.floor(Math.random() * words.length)]);
}

function checkWord(userLetter) {
    if (turns == 0) {
        console.log(messages.lose);
        turns = 10;
        newWord();
        game();
        return;
    }
    if (userLetter == null) {
        console.log(messages.guess);
        promptUser();
        return;
    }
    displayString = word.guess(userLetter); // returns letter.returnLetter();
    turns--;
    console.log(displayString)
    game();
    promptUser();
}

function game() {
    //if (turns !== 0) {
    if (displayString.indexOf("_")== -1) {
        console.log(messages.win);
        newWord();
        turns = 10;
        return;
    }
}
newWord()
promptUser();

