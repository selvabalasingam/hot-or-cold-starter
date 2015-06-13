
$(document).ready(function(){
	
	/*--- Display information modal box (shows the instructions to play the game) ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game when the user clicks the “New Game” button ---*/
  	var guess;
  	var number;
  	var newGame = function () {
  		$("#guessButton").on("click", function() {
		event.preventDefault();
  	}

  	/*--- make sure it's a whole number and not a decimal ---*/
  	if(isNaN(number)){
  		alert("Please enter numbers only")
  	} 
  	else if (number % 1 > 0) {
  		alert("Sorry no decimals! Please enter whole numbers only!")
  	}
  	/*--- A secret number between 1 and 100 should be generated for the user to guess ---*/
   	else if (number > 100) {
  		alert("Please enter numbers from 1 to 100")
  	}

  	/*--- Feedback about each guess – if it was too low, too high, or just right. ---*/
  	if (number >= 50){
  		feedback("Freezing cold! Guess again");
  	}
  	else if (number >= 30){
  		feedback("Cold, almost there though!");
  	}
  	else if (number >= 20){
  		feedback("Warm! keep trying!");
  	}
  	else if (number >= 10){
  		feedback("Hot... Very, very close!");
  	}
  	else {
  		feedback("Super hot! Please guess again!")
  	}

  	/*--- Track how many guesses the user has made & supply users with a list of the numbers they have guessed so far ---*/
  	$("#guessList").prepend("<li>" + guess + "</li>");

});


