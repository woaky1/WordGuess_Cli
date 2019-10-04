Word = require("./Word.js");
inquirer = require("inquirer");

var mysteryWords = ["chicken","dog","ennui"];
var guessedWords = [];
var mysteryWord;

function game() {
    if (guessedWords.length !== mysteryWords.length) {
        wordPicker();
        thisRoundsWord = new Word(mysteryWord);
        console.log(thisRoundsWord);
        thisRoundsWord.letterfy();
        guesser()

    } else {
        console.log("You've guessed all the words. Nice work!");
    }

}

function wordPicker() {
    potentialMysteryWord = mysteryWords[Math.floor(Math.random() * 3)]
        if (guessedWords.includes(potentialMysteryWord)) {
            wordPicker();
        } else {
            mysteryWord = potentialMysteryWord;
        }
}

function guesser(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "userGuess"
            }
        ])
        .then(function(response){
            thisRoundsWord.wordCheck(response.userGuess);
            thisRoundsWord.project();
        });
    if (thisRoundsWord.project().indexOf("_" > - 1)) {
        guesser();
    }
}
game();