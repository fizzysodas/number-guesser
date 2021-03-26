let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
let cGuess;
let tGuess;
let hGuess;
let humanWon = "true";
let roundNumber;


const guessButton = document.getElementById('guess');
const tarGuess = document.getElementById('target-number');
const humanGuessInput = document.getElementById('human-guess');
const compGuess = document.getElementById('computer-guess');
const roundNumberDisplay = document.getElementById('round-number');
const humanScoreDisplay = document.getElementById('human-score');
const computerScoreDisplay = document.getElementById('computer-score');
const computerWinsDisplay = document.getElementById('computer-wins');
const nextRoundButton = document.getElementById('next-round')

//CODE

//BUTTON IS CLICKED & HUMAN GUESS
    
    //Start game    
    

    //set to humGuess 
    function myFunction () {
        var hGuess = humanGuessInput.value;
    }

//COMPUTER GUESS SIDE
    //Event listener function 
        guessButton.addEventListener('click', () => {
            computerPickingNumber ();
            generateTarget();
            let humanWon =  compareGuesses();
            updateScore();
            guessButton.className = "button[disabled]";
            nextRoundButton.disabled = false;



        });


    //computer picking number function
        function computerPickingNumber () {
         cGuess = Math.floor(Math.random() * 9);
         compGuess.innerHTML = cGuess;
    };

//TARGET NUMBER
    //game picking winning number
        function generateTarget() {
            tGuess = Math.floor(Math.random() * 9);
            tarGuess.innerHTML = tGuess;
        }

//GAME PLAY
    //This function will be called each round to determine which guess is closest to the target number.
        function compareGuesses (tGuess, cGuess, hGuess) {
    
            if (Math.abs(hGuess - tGuess) < Math.abs(cGuess - tGuess) || hGuess === cGuess) {
                return "true";
            } else if(Math.abs(cGuess - tGuess) < Math.abs(hGuess - tGuess)) {
                return "false";
            };
        }
    




//This function will be used to correctly increase the winner’s score after each round.
    function updateScore(humanWon){
        if(humanWon == "true"){
            humanScore += 1;
            humanScoreDisplay.innerHTML = humanScore;
            guessButton.innerHTML= "You Win!!!";
            guessButton.className = "winning-text";

        }else{
            computerScore =+ 1;
            computerScoreDisplay.innerHTML = computerScore;
            computerWinsDisplay.innerHTML = "Computer Wins";
            guessButton.className = "winning-text[disabled]";
        }
    }


//NEXT ROUND
    //Event listener function 
    nextRoundButton.addEventListener('click', () => {
        currentRoundNumber = advanceRound();
        


    });







    function advanceRound(currentRoundNumber){
        roundNumber = ++currentRoundNumber;
        roundNumberDisplay.innerHTML = roundNumber;
        currentRoundNumber = roundNumber;
    }


     



