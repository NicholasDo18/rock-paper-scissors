console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 );
    let computerOption = "";
    
    if(choice === 0){
        computerOption = "Rock";
    }
    else if(choice === 1){
        computerOption = "Paper";
    }
    else{
        computerOption = "Scissors";
    }
    return computerOption.toLowerCase();
}

function getHumanChoice(){
    let option = prompt("Rock, Paper, or Scissors");
    return option.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Draw.")
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Paper.");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Draw.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper.");
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You win! Paper beats Rock.");
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Draw.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        humanScore += 1;
    }
    else{
        console.log("INVALID OPTION. please try again.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

