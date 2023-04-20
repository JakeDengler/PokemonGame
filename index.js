let playerScore = 0;
let computerScore = 0;

function getplayerChoice(){
    var dict = {1:'fire', 2:'water', 3:'grass'};
    const playerSelection = prompt("What Pokemon Type will you choose?Enter one of the number values below  1) Fire 2) Water 3) Grass") 
    const type = dict[playerSelection]
    if (playerSelection == 1||2||3) {
        console.log("You have choosen " + type +" as your type")
        return type
    } else {
        return console.log("Please refresh")
    }
}

function getComputerChoice() {
    const computerchoice = ['fire', 'water', 'grass' ];
    const type = computerchoice[Math.floor(Math.random()* computerchoice.length)]
    return type
}

function playRound (){
    const playerSelection = getplayerChoice();
    const computerSelection = getComputerChoice(); 

    if (playerSelection == 'fire') {
        if (computerSelection == "fire") {
            console.log("Fire vs Fire")
            return alert("Draw") 
        } else if (computerSelection == "water") {
            console.log("Fire vs Water")
            computerScore += 1;
            return alert("Comptuer Wins")
        } else {
            console.log("Fire vs Grass")
            playerScore += 1;
            return alert("Player Wins")
        }

    } else if (playerSelection == 'water') {
        if (computerSelection == "water") {
            console.log("Water vs Water")
            return alert("Draw")
        } else if (computerSelection == "fire") {
            console.log("Water vs Fire")
            playerScore += 1;
            return alert("Player Wins")
        } else {
            console.log("Water vs Grass")
            computerScore += 1;
            return alert("Comptuer Wins")
        }
    } else if (playerSelection == 'grass') {
        if (computerSelection == "grass") {
            console.log("Grass vs Grass")
            return alert("Draw")
        } else if (computerSelection == "water") {
            console.log("Grass vs Water")
            playerScore += 1;
            return alert("Player Wins")
        } else {
            console.log("Grass vs Fire")
            computerScore += 1;
            return alert("Comptuer Wins")
        }
    } else {
        return console.log("Please refresh and enter a correct value")
    }
}

function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        (playRound());
    } if (playerScore == 5) {
        return alert("Congratulations!!! You win!")
    } else if (computerScore == 5) {
        return alert("You lose :( Better luck next time!")
    }
}

playGame();