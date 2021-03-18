let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let compGuess = 0;
let tarGuess = 0;
let humGuess = 0;



//CODE

//GAME PLAY
    //game picking winning number
        function generateTarget() {
            return Math.floor(Math.random() * 9);
        }

    //calling function 
        tarGuess = generateTarget();
    
    //changing the HTML target-number
        document.getElementById("target-number").innerHTML = tarGuess

  
    //This function will be called each round to determine which guess is closest to the target number.
        function compareGuesses (tarGuess, compGuess, humGuess) {
            //subtracting both values from target-number. abs() is absolute value
            humGuess = Math.abs(humGuess - tarGuess);
            compGuess = Math.abs(compGuess - tarGuess);

            //min() returns the lowest-valued number passed into it. z value holds lower number
            var z = Math.min(humGuess, compGuess);

            // which value humGuess or compGuess is z value and returns true or false
            if (humGuess === z && compGuess === z){
                return true;
              }else if (humGuess === z) {
                return true;
              }
              else{
                return false;
              }
        }

    
//COMPUTER SIDE

    //computer picking number function
        function computerPickingNumber () {
            return Math.floor(Math.random() * 9);
        }

    //calling computerPickNumber 
        compGuess = computerPickingNumber();

    //changing the HTML computer-guess
       document.getElementById("computer-guess").innerHTML = compGuess;
       
  
       






//HUMAN SIDE

        //get value human choose
        function humanNumber () {
        humGuess = document.getElementById("human-guess");
        document.getElementById("round-number").innerHTML = humGuess;
        }

     



