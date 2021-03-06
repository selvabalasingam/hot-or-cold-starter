
$(document).ready(function(){
	
	/*--- Display information modal box (shows the instructions to play the game) ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var luckynumber = Math.ceil(Math.random()*100); /*--- for random number ---*/

    var changeHeader = function(text, color){ /*--- to change the feedback everytime user enters number ---*/
      $("#feedback").text(text);
    }

    guessCount = 0; /*--- this counts the guesses from 0 ---*/
    var guessCountDisplay = function(amount) {
      guessCount += amount; /* means guessCount = guessCount + amount; because you either want to leave guessCount at 0 or increment it */
      $("#count").text(guessCount);
    };

    $("form").submit(function(e){
      e.preventDefault();
      var number = $("#userGuess").val();
      $('#userGuess').val(''); /*--- this will clear the user input everytime you click enter/guess button ---*/
      var distance = Math.abs(luckynumber - number);

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
      else{
        if (distance >= 50){
          changeHeader("Freezing cold! Guess again");
        }
        else if (distance >= 30){
          changeHeader("Cold, almost there though!");
        }
        else if (distance >= 20){
          changeHeader("Warm! keep trying!");
        }
        else if (distance >= 10){
          changeHeader("Hot... Very, very close!");
        }
        else if (distance > 0){
          changeHeader("super hot!");
        }
        else {
          changeHeader("Good job!!")
        }
        /*--- Track how many guesses the user has made & supply users with a list of the numbers they have guessed so far ---*/
        $("#guessList").prepend("<li>" + number + "</li>"); /* use number to define user guess */
        guessCountDisplay(1); /* you need to call the function inorder for it to work! And the count will begin from 0!*/
      }
    });
    $(".new").click(function(){
        luckynumber = Math.ceil(Math.random()*100);  //Generates a new random number
        guessCount = 0; //Sets guess to 0
        changeHeader("Make a guess!"); //Replaces current header
        $('#userGuess').val(''); //Clears user input, 
        //the .val method lets you set or get the value of the input and the empty quotes leave the input empty 
        //if you typed something inside the quotes then you would see it in the input bar
        $("#guessList").html(''); //Clears the guess area ----[you could also do $("#guessList li").remove();]
        guessCountDisplay(0); //Set number of guesses on screen to guessCount (aka 0)
    });
});

