const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
const choice = options[Math.floor(Math.random() * options.length)];
return choice;
};

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie';
    }
    else if((playerSelection == 'rock' && computerSelection == 'paper') || playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'Computer';
    }
    else {
        return 'Player';
    }

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return "It's a Tie!";
    } else if(result == 'Player'){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt('Rock Paper Scissors');
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer
    console.log("Welcome!")
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
       console.log(playRound(playerSelection, computerSelection));
       if(checkWinner(playerSelection, computerSelection) == 'player'){
        scorePlayer ++;
       } else if(checkWinner(playerSelection, computerSelection) == 'computer'){
        scoreComputer++;
       }
    }
};

game();