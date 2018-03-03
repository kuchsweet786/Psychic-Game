updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();

var userGuess = {


    document.onkeyup = function () {

    if (userGuess === letterToGuess) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        console.log();

        alert("Yes, the letter was " + computerGuess.toUpperCase());
        alert("Yes, you are psychic!");
        reset();
    }

    else if(guessesLeft === 0){
        // Then we will loss and we'll update the html to display the loss
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, the correct letter was " + computerGuess.toUpperCase() + " maybe try again?");
        alert("Sorry, you're not psychic, maybe try again?");
        // Then we'll call the reset.
        reset();
    }



    // this is the closing of the entire doc.
}

}