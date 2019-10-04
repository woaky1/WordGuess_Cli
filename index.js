Word = require("./Word.js");
inquirer = require("inquirer");

var mysteryWords = ["chicken","dog","ennui"];
var guessedWords = [];
var mysteryWord;
var askAgain;

function game() {
    wordPicker();
    thisRoundsWord = new Word(mysteryWord);
    console.log(thisRoundsWord);
    thisRoundsWord.letterfy();
    console.log(thisRoundsWord);
    thisRoundsWord.project();
    guesser();
}

function wordPicker() {
    potentialMysteryWord = mysteryWords[Math.floor(Math.random() * 3)]
        if (guessedWords.includes(potentialMysteryWord)) {
            wordPicker();
        } else {
            mysteryWord = potentialMysteryWord;
            guessedWords.push(mysteryWord);
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
            for (var i = 0; i < thisRoundsWord.letters.length; i++)
                if (thisRoundsWord.letters[i].guessed === false) {
                    askAgain = true;
                } else {
                    askAgain = false;
                }
            if (askAgain === true) {
                guesser();
            } else if ((askAgain === false) && (guessedWords.length !== mysteryWords.length)) {
                    console.log("Nice job. Let's try another word.")
                    game();
                } else {
                    console.log("You've guessed all the words. Nice work!");
                }

        });
}

game();