const SCISSORS = 0;
const ROCK = 1;
const PAPER = 2;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(userSelection, computerSelection) {
    if (userSelection.toUpperCase() == "ROCK" ) {
        if (computerSelection == ROCK) {
            // Both rock
            return "Draw!";
        } else if (computerSelection == SCISSORS) {
            // rock vs scissor
            return "You win! Rock beats Scissor";
        } else {
            // rock vs paper
            return "You lose! Paper beats Rock";
        }
    } else if (userSelection.toUpperCase() == "PAPER") {
        if (computerSelection == ROCK) {
            // paper vs rock
            return "You win! Paper beats Rock";
        } else if (computerSelection == SCISSORS) {
            // paper vs scissor
            return "You lose! Scissor beats Paper";
        } else {
            // paper vs paper
            return "Draw!";
        }
    } else if (userSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == ROCK) {
            // scissors vs rock
            return "You lose! Rock beats Scissor";
        } else if (computerSelection == SCISSORS) {
            // scissors vs scissor
            return "Draw!";
        } else {
            // scissors vs paper
            return "You win! Scissors beats Paper";
        }
    }
}

let userSelection = prompt("Choose rock, paper or scissors");
let computerSelection = getComputerChoice();

console.log(playRound(userSelection, computerSelection));
