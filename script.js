
function getComputerChoise(string) {
    let computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];  
}

const playerSelection = prompt("rock paper or scissors").toLowerCase();
const computerSelection = getComputerChoise();

function compare(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Its tie!";
    }
if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
        playerScore++;
        return "You won, Rock Beats scissors";
        
    } else {
        computerScore++;
        return "You Lose, Paper beats Rock";
    }
}
if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        playerScore++;
        return "You won!, Paper beats Rock";
    } else {
        computerScore++;
        return "You Lost! Scissors beats paper";
    }
}
if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
        playerScore++
        return "You won";
    } else {
        computerScore++;
        return "You lost";
    }
}
}
let playerScore = parseInt(0);
let computerScore = parseInt(0);
 
for(let i = 0; playerScore <= 4; i++) {
    const playerSelection = prompt("rock paper or scissors").toLowerCase();
    const computerSelection = getComputerChoise()
    console.log(compare(playerSelection, computerSelection))
    console.log(computerSelection)
    console.log(playerScore);}