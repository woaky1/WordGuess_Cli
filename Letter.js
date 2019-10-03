function Letter(trueLetter,guessed,userGuess){
    this.trueLetter = trueLetter;
    this.guessed = guessed;
    this.userLetter = userGuess;
    this.display = function() {
        if (this.guessed === true) {
            return this.trueLetter;
        } else {
            return "_";
        };
    };
    // this.check = function(userGuess){
    //     if (this.trueLetter === this.userLetter) {
    //         this.guessed = true;
    //     } else {
    //         this.guessed = false;
    //     }
    // };
}

var a = new Letter("a",true,"b");
console.log(a.display());
module.exports = Letter;