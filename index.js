Word = require("./Word.js");
inquirer = require("inquirer");

var mysteryWords = ["chicken","dog","ennui"];
var guessedWords = [];
var mysteryWord;
var askAgain;
var pastState;
var currentState;
var numGuesses;
var victories = 0;

function game() {
    numGuesses = 10;
    console.log(numGuesses);
    wordPicker();
    thisRoundsWord = new Word(mysteryWord);
    console.log(thisRoundsWord);
    thisRoundsWord.letterfy();
    console.log(thisRoundsWord);
    pastState = thisRoundsWord.project();
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
            console.log("Past State: " + pastState)
            thisRoundsWord.wordCheck(response.userGuess);
            currentState = thisRoundsWord.project();
            if (currentState === pastState) {
                numGuesses--
                console.log("Nope. You have " + numGuesses + " left.")
                pastState = currentState;
            } else {
                pastState = currentState;
            }
            for (var i = 0; i < thisRoundsWord.letters.length; i++)
                if ((thisRoundsWord.letters[i].guessed === false) && (numGuesses != 0)) {
                    askAgain = true;
                } else {
                    askAgain = false;
                }
            if (askAgain === true) {
                guesser();
            } else if ((askAgain === false) && (guessedWords.length !== mysteryWords.length)) {
                if (numGuesses === 0) {
                    console.log("Let's try another word.");
                } else {
                    console.log("Nice job. Let's try another word.")
                    victories++
                }    
                    game();
            } else {
                victories++
                if (victories < mysteryWords.length) {
                    console.log("Game Over. You guessed " + victories + " words correctly.")
                } else {
                    console.log("You've guessed all the words. Nice work!");
                }
                    
            }

        });
}

game();