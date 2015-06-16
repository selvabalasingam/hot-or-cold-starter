
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

    $("form").submit(function(e){
      e.preventDefault();
      var number = $("#userGuess").val();
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
          alert("Freezing cold! Guess again");
        }
        else if (distance >= 30){
          alert("Cold, almost there though!");
        }
        else if (distance >= 20){
          alert("Warm! keep trying!");
        }
        else if (distance >= 10){
          alert("Hot... Very, very close!");
        }
        else if (distance > 0){
          alert("super hot!");
        }
        else {
          alert("Good job!!")
        }
        /*--- Track how many guesses the user has made & supply users with a list of the numbers they have guessed so far ---*/
        $("#guessList").prepend("<li>" + guess + "</li>");
      }

    });
});


