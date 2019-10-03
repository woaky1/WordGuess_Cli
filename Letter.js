function Letter(trueLetter,guessed){
    this.trueLetter = trueLetter;
    this.guessed = guessed;
    this.display = function() {
        if (this.guessed === true) {
            return this.trueLetter;
        } else {
            return "_";
        };
    };
    this.check = function(userGuess){
        if (this.trueLetter === userGuess) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };
}

module.exports = Letter;