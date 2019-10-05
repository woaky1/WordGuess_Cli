// This constructor creates an object for each letter in the word we're guessing.
function Letter(trueLetter){
    this.trueLetter = trueLetter;
    this.guessed = false;
    // This method tells the game whether to display an underscore or the true letter if the user has guessed this letter correctly.
    this.display = function() {
        if (this.guessed === true) {
            return this.trueLetter;
        } else {
            return "_";
        };
    };
    // This method checks the user's guess against the letter and sees if the user's guess matches. 
    this.check = function(userGuess){
        if (this.guessed === true) {

        } else if (this.trueLetter === userGuess) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };
}

module.exports = Letter;