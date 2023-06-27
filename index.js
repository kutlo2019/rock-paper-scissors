const SCISSORS = 0;
const ROCK = 1;
const PAPER = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(userSelection, computerSelection) {
    if (userSelection.toUpperCase() == "ROCK" ) {
        // Prints message to console and returns winner
        if (computerSelection == ROCK) {
            // Both rock
            console.log("Draw!");
            return "None";
        } else if (computerSelection == SCISSORS) {
            // rock vs scissor
            console.log("You win! Rock beats Scissor");
            return "User";
        } else {
            // rock vs paper
            console.log("You lose! Paper beats Rock")
            return "Computer";
        }
    } else if (userSelection.toUpperCase() == "PAPER") {
        if (computerSelection == ROCK) {
            // paper vs rock
            console.log("You win! Paper beats Rock");
            return "User";
        } else if (computerSelection == SCISSORS) {
            // paper vs scissor
            console.log();
            return "Computer";
        } else {
            // paper vs paper
            console.log("Draw!");
            return "None";
        }
    } else if (userSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == ROCK) {
            // scissors vs rock
            console.log("You lose! Rock beats Scissor");
            return "Computer";
        } else if (computerSelection == SCISSORS) {
            // scissors vs scissor
            console.log("Draw!");
            return "None";
        } else {
            // scissors vs paper
            console.log("You win! Scissors beats Paper");
            return "User";
        }
    }
}

function game() {
    let userRounds = 0;
    let compRounds = 0;

    while(userRounds < 5 && compRounds < 5) {
        let userSelection = prompt("Choose rock, paper or scissors");
        let computerSelection = getComputerChoice();
        winner = playRound(userSelection, computerSelection);
        console.log("winner", winner)
        if (winner == "Computer") {
            compRounds++;
        } else if (winner == "User") {
            userRounds++;
        }
        if (userRounds == 5) {
            return "First to Five. You Win!"
        } else if (compRounds == 5) {
            return "First to Five. You Lose!"          
        }
    }
}

console.log(game());