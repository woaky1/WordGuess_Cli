// We'll need the Word constructor to create the objects we'll need to play the game.
// The inquire npm package is how we get the user's input.
Word = require("./Word.js");
inquirer = require("inquirer");

// Establishing a bunch of global variables, including the words the user will be trying to guess.
var mysteryWords = ["chicken","dog","ennui"];
var guessedWords = [];
var mysteryWord;
var askAgain;
var pastState;
var currentState;
var numGuesses;
var victories = 0;

// This is the core function of the game.
function game() {
    // Here we establish the base number of guesses the player has.
    numGuesses = 10;
    wordPicker();
    thisRoundsWord = new Word(mysteryWord);
    thisRoundsWord.letterfy();
    pastState = thisRoundsWord.project();
    guesser();
}

//This fuction selects one of the possible mystery words at random.
function wordPicker() {
    potentialMysteryWord = mysteryWords[Math.floor(Math.random() * 3)]
        if (guessedWords.includes(potentialMysteryWord)) {
            wordPicker();
        } else {
            mysteryWord = potentialMysteryWord;
            guessedWords.push(mysteryWord);
        }
}

// In this fuction, the player makes their guess, we check that guess, and we determine what should happen next (Let the user guess again? Pick a new word? Game over?)
function guesser(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "userGuess",
                validate: function(value) {
                    var pass = (value.length === 1);
                    if (pass) {
                        return true;
                    }
                    return "Please type ONE letter.";
                }
            }
        ])
        .then(function(response){
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
                    i = thisRoundsWord.letters.length;
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
// Need to call the game function to get the game to start!
game();