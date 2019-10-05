function Letter(trueLetter){
    this.trueLetter = trueLetter;
    this.guessed = false;
    this.display = function() {
        if (this.guessed === true) {
            return this.trueLetter;
        } else {
            return "_";
        };
    };
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