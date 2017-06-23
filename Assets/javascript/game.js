	

    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wins = 0;
    var losses = 0;
    var guessLeft =9;
    var myGuess =[];
    var userGuess = 0;

    
      var secretLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (myGuess.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0) {
		myGuess[myGuess.length]=userGuess;
		guessLeft--;
		}
		if (secretLetter === userGuess) {
      	wins++;
      	guessLeft = 9;
        myGuess = [];
		}
      	else if (guessLeft === 0) {
    		losses++;
    		alert("Clearly you can't read my mind!");
    		guessLeft = 9;
    		myGuess = [];

		}
      
      	 var html =
         "<h4>The computer chose: " + secretLetter + "</h4>" +
         "<h4>wins: " + wins + "</h4>" +
         "<h4>my guess: " + myGuess + "</h4>" + 
         "<h4>losses: " + losses + "</h4>" +
         "<h4>guesses left: " + guessLeft + "</h4";

        document.querySelector("#psychic").innerHTML = html;

     }