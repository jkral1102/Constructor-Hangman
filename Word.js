// Import letter.js functionality
var Letter = require('./letter.js');

var Wordy = function(word) {
    this.word = word;
    // Array of constructor objects to be checked by the Letter constructor in function: this.guess
    this.returnedObjArr = [];

        // Array to store letters of the word to be checked individually against underlying characters
        var wordLetters = [];

        // create wordLetters array 
        for (i=0; i < word.length; i++) {
            wordLetters.push(word[i]);
        }
        // calls letter compare function 
        for (j=0; j < wordLetters.length; j++) {
            // Creates a new constructor object. ex: if word is "pot", var returnedObj = [(new Letter("p")), (new Letter ("o")), (new Letter("t"))];
            var returnedObj = new Letter(wordLetters[j]); 
            this.returnedObjArr.push(returnedObj); //
        }
    
    this.guess = function(userLetter){
        var displayString="";
        this.returnedObjArr.forEach(

            function(Letter) {
                Letter.checker(userLetter);
                displayString += Letter.returnLetter(); //display this shit
                //this.displayString += letter.returnLetter();
        });
        return displayString;
    }
}
module.exports = Wordy;