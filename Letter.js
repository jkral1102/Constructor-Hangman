//Constructor that displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter
var Letter = function(letter) {
        this.letter = letter;
        this.guessed = false;
    
        // function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        this.checker = function(userLetter) {
            if (userLetter === this.letter) {
                this.guessed = true;
            }
        }
    
        // function that returns the underlying character if the letter has been guessed or a placeholder (like an underscore) if the letter has not been guessed
        this.returnLetter = function() {
            if (this.guessed === true) {
                return this.letter;
            } else {
                return "__";
            }
    
        }
    }

    module.exports = Letter;