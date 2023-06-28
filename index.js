const SCISSORS = 0;
const ROCK = 1;
const PAPER = 2;

let USER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(userSelection, computerSelection) {
    if (userSelection.toUpperCase() == "ROCK" ) {
        // Prints message to console and returns winner
        if (computerSelection == ROCK) {
            // Both rock
            return "None";
        } else if (computerSelection == SCISSORS) {
            // rock vs scissor
            return "User";
        } else {
            // rock vs paper
            return "Computer";
        }
    } else if (userSelection.toUpperCase() == "PAPER") {
        if (computerSelection == ROCK) {
            // paper vs rock
            return "User";
        } else if (computerSelection == SCISSORS) {
            // paper vs scissor
            return "Computer";
        } else {
            // paper vs paper
            return "None";
        }
    } else if (userSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == ROCK) {
            // scissors vs rock
            return "Computer";
        } else if (computerSelection == SCISSORS) {
            // scissors vs scissor
            return "None";
        } else {
            // scissors vs paper
            return "User";
        }
    }
}

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const beginGame = document.createElement('h2');
beginGame.innerHTML = 'Click a button to Start!' 
screen.appendChild(beginGame);

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const userBoard = document.querySelector('#player-score');
        const computerBoard = document.querySelector('#computer-score');
        const userSelection = e.target.id;
        const computerSelection = getComputerChoice();
        const winner = playRound(userSelection, computerSelection);
        const result = document.createElement('h2');
        if (winner === 'None') {
            result.innerHTML = "Result is a Draw";
        } else if (winner === 'User') {
            result.innerHTML = `You have won the round!`;
            USER_SCORE++;
            userBoard.innerHTML = USER_SCORE;
        } else {
            result.innerHTML = 'You lost, Comp wins :-(';
            COMPUTER_SCORE++;
            computerBoard.innerHTML = COMPUTER_SCORE;
        }

        if (screen.children[0] === undefined) {
            screen.removeChild(document.querySelector('h2'));
            screen.appendChild(result);
        } else {
            screen.replaceChild(result, screen.childNodes[0]);
        }

        if (COMPUTER_SCORE == 5) {
            alert(":(:( Computer Wins!!! ):):");
            location.reload();
        } else if (USER_SCORE == 5) {
            alert("!!! You Win !!!");
            location.reload();
        }
    });
});