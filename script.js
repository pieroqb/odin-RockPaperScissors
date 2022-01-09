function computerPlay()
{
    const min = 1;
    const max = 3;
    const play = Math.floor(Math.random() * (max - min +1)) + min;

    switch (play)
    {
        case 1: 
        return "Rock"; 
        break;

        case 2: 
        return "Paper"; 
        break;

        case 3: 
        return "Scissors";
        break; 
    }
}


function roundPlay(playerSelection)
{
    let computerSelection = computerPlay();
    //let playerSelection = prompt("Select Rock, Paper or Scissors","");
    //playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

   switch (playerSelection)
   {
       case "Rock":
           switch (computerSelection)
           {
               case "Rock": 
               return "It's a tie!";
               break;
               case "Paper": 
               return "You lose! Paper beats Rock";
               break;
               case "Scissors": 
               return "You win! Rock beats Scissors"; 
           }
       break;
       case "Paper":
       switch (computerSelection)
           {
               case "Rock": 
               return "You win! Paper beats Rock" ;
               break;
               case "Paper": 
               return "It's a tie!";
               break;
               case "Scissors": 
               return "You lose! Scissors beat Paper" ;
           } 
       break;
       case "Scissors": 
       switch (computerSelection)
           {
               case "Rock": 
               return "You lose! Rock beats Scissors";
               break;
               case "Paper": 
               return "You win! Scissors beat Paper";
               break;
               case "Scissors": 
               return "It's a tie!"; 
           }
       break;
       default:
       return "Invalid input"; 
   }
}
/*
function game()
{
    
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

while (rounds<5)
{
    let outcome = round();
    console.log(outcome);

    if (outcome.includes("win")) playerScore++;
    else if (outcome.includes("lose")) computerScore++;

    rounds++;
}

if (playerScore > computerScore) 
    console.log(`---You won this game! ${playerScore}-${computerScore}---`);
else if (playerScore < computerScore) 
    console.log(`---You lost this game! ${playerScore}-${computerScore}---`);
else
    console.log(`---This game was a tie! ${playerScore}-${computerScore}---`); 

}

game()*/

const buttons = document.querySelectorAll("button");
const round = document.querySelector(".round");
const playerScoreText = document.querySelector(".score > .player");
const computerScoreText = document.querySelector(".score > .computer");
const winner = document.querySelector(".winner");

let playerScore = 0;
let computerScore = 0;
let outcome;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        outcome = roundPlay(button.textContent);
        round.textContent = outcome;

        //Highlighting pressed button
        buttons.forEach(button => {
            button.classList.remove("last-selected")
        });

        button.classList.add("last-selected")

        // Increasing winner's score
        if (outcome.includes("win"))
        {
            playerScore++;
            playerScoreText.textContent = playerScore;
        }
        else if (outcome.includes("lose"))
        {
            computerScore++;
            computerScoreText.textContent = computerScore;
        }

        // Checking if win condition is met
        if (playerScore >= 5)
        {
            winner.textContent = `*** You won this game! ${playerScore}-${computerScore} ***`
            buttons.forEach(button => {
                button.disabled = true;
            });
            button.classList.remove("last-selected")
        }
        if (computerScore >= 5)
        {
            winner.textContent = `*** You lost this game! ${playerScore}-${computerScore} ***`
            buttons.forEach(button => {
                button.disabled = true;
            });
            button.classList.remove("last-selected")
        }
    
    })
});




