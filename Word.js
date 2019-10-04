var Letter = require("./Letter.js");

function Word(string) {
    this.string = string;
    this.letters = [];
    this.letterfy = function(){
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
        console.log("Here's displayString: " + displayString);
        
    }
}

chicken = new Word("chicken");
// console.log(chicken);
chicken.letterfy();
// console.log(chicken);
chicken.project();
// console.log(chicken.letters[0].trueLetter);

module.exports = Word;
