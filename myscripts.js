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