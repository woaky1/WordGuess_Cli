# WordGuess_Cli

# Play hangman... on a CLI!

WordGuess_Cli is game I built as part of my studies at Northwestern's Coding Bootcamp. Building it allowed me to practice working in Node and building constructor functions. Plus, hangman is a classic. A... distrubing... classic.

## How the application is organized
The application is basically a series of nested constructors that feed objects into the main file, index.js, which then uses those objects to play the game.
- Letter.js contains a constructor that builds objects for letters that contain info about that letter and several methods we can run to either hide of reveal that letter as the game is played.
- Word.js feeds Letter.js letters and provides methods that are used to play each round of hangman with index.js.
- index.js is the main game file. It stores and selects words for the user to guess, calls methods in Word.js, and keeps track of the game's progress.

## How to play

1. Clone this repo and run `npm i` to install the inquier npm package.
2. Type `node index.js`
3. A random word will be chosen for you to guess. You will be asked for a guess. Type a letter and hit return to see if it's in the word.
4. You can miss a letter 10 times before being forced to move on to the next word, and at the end of the game you'll get an overall score on how you did.

Here's a video of the game in actions:
https://drive.google.com/file/d/1f20hN6-Ety0I2_A5dW_MsfCc0TFBOu0j/view?usp=sharing

## Tech used
WordGuess_Cli used the node package **inquirer** to ask the user for their input and pass thagt input into the game. Other than that, WordGuess_Cli is just good, ole Node.js!

## About me
I'm an aspiring developer and student at Northwester's Coding Bootcamp. Hope you enjoy the game!