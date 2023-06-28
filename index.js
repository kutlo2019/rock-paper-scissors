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

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const userSelection = e.target.id;
        const computerSelection = getComputerChoice();
        const winner = playRound(userSelection, computerSelection);
        const result = document.createElement('h2');
        if (winner === 'None') {
            result.innerHTML = "Result is a Draw";
        } else {
            result.innerHTML = `The winner is the ${winner}!`;
        }
        const screen = document.querySelector('.screen');
        console.log(screen.children[0])
        if (screen.children[0] === undefined) {
            screen.appendChild(result);
        } else {
            screen.replaceChild(result, screen.childNodes[0]);
        }
    });
});

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