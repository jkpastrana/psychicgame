
	

		var numberWins = 0;
		var numberLosses = 0;
		var guessLeft = 10;
		var letterUsed = [];



        document.onkeyup = function(event) {

        var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
		
		var computerRandom = letters[Math.floor(Math.random()*letters.length)];	

		// Determines which exact key was selected. Make it lowercase
		var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

					

				if ( playerGuess === computerRandom){
		                
		                
		                numberWins++;
		                guessLeft = 10;
		              	letterUsed = [];
		                
		            
		            }
		            else if(guessLeft == 0){


		            	numberLosses++;
		                guessLeft = 10;
		                letterUsed = [];

	          
		             		        
		            }
		            else{

						guessLeft--;
		                letterUsed.push(String.fromCharCode(event.keyCode).toLowerCase());
		                

		            }
		         // Taking the tallies and displaying them in HTML
 					var html = "<h3>The Psychic Game</h3>" +
 					"<p>Guess the letter Im thinking of?</p>" +
 					"<p>Wins: " + 
 					numberWins + 
 					"</p>" +
 					"<p>Losses: " + 
 					numberLosses + 
 					"</p>" +
 					"<p>Guesses left: " + 
 					guessLeft +
 					"</p>" +
 					"<p>Your guesses so far: " + 
 					letterUsed +
 					"</p>";
 
 				// Placing the html into the game ID
 					document.querySelector('#game').innerHTML = html;

}	

