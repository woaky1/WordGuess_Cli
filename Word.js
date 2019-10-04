var Letter = require("./Letter.js");

function Word(string) {
    this.string = string;
    this.letters = [];
    this.letterfy = function(){
        console.log("Almost in letterFeed: " + JSON.stringify(this, null, 2));
        var letterFeed = this.string.split("");
        for (var i = 0; i < letterFeed.length; i++) {
            this.letters.push(letter = new Letter(letterFeed[i]))
        }
    };
    this.project = function(){
        var displayArray = [];
        var letterDisplayArray = this.letters
        for (var j = 0; j < letterDisplayArray.length; j++) {
            displayArray.push(letterDisplayArray[j].display());
            // console.log(displayArray);
            
        }
        var displayString = displayArray.toString().replace(/,/g," ");
        console.log(displayString);
        
    }
    this.wordCheck = function (userGuess) {
        for (var k = 0; k < this.letters.length; k++) {
            this.letters[k].check(userGuess);
        }
    }
}

module.exports = Word;

// chicken = new Word("chicken");
// chicken.letterfy();
// chicken.project();
// chicken.wordCheck("c");
// chicken.project();
// chicken.wordCheck("h");
// chicken.project();