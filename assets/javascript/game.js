


var compChoice = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = compChoice[Math.floor(Math.random() * compChoice.length)];



document.onkeyup = function (event) {

    var playerChoice = event.key;
    if (letterToBeGuessed === playerChoice ) {
        wins++;
        guessesLeft = 9;
        console.log("You won!");
        console.log(wins);

    } else {
        if(guessesLeft > 0)  {
            guessesLeft--;
            console.log(guessesLeft);
        }
        if(guessesLeft === 0) {
            losses--;
            guessesLeft = 9;
            console.log('You Lost');
            console.log(losses);
        }
    }
    var html = "<h1> The Psychic Game </h1> " + "<p> Guess What Letter I am thinking of</p>" + "<p> Wins: </p>" + " <p> Losses: </p>" + "<p> Guesses Left:</p>" + "<p> Your Guesses So Far:</p>";

};

