// We need to require Letter.js, since this constructor uses methods in that constructor extensively.
var Letter = require("./Letter.js");

// This constructor takes the string of the word supllied to it and contructs an object that will be used for this round of game play.
function Word(string) {
    this.string = string;
    this.letters = [];
    // This method takes the original sting of the word and splits it into seperate letters and feeds it into the Letter constructor, then stores the resulting objects in an array.
    this.letterfy = function(){
        var letterFeed = this.string.split("");
        for (var i = 0; i < letterFeed.length; i++) {
            this.letters.push(letter = new Letter(letterFeed[i]))
        }
    };
    // This method is used to display the current word in play. Unguessed letters appear as underscores, guessed letters appear correctly.
    this.project = function(){
        var displayArray = [];
        var letterDisplayArray = this.letters
        for (var j = 0; j < letterDisplayArray.length; j++) {
            displayArray.push(letterDisplayArray[j].display());
        }
        var displayString = displayArray.toString().replace(/,/g," ");
        console.log(displayString);
        return displayString;
        
    }
    // This method cheecks the user's guess against every letter in the word and see if it matches any of them.
    this.wordCheck = function (userGuess) {
        for (var k = 0; k < this.letters.length; k++) {
            this.letters[k].check(userGuess);
        }
    }
}

module.exports = Word;