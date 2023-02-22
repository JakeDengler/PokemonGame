
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
    if (playerSelection == 'fire') {
        if (computerSelection == "fire") {
            return console.log("Fire & Fire: Draw")
        } else if (computerSelection == "water") {
            computerpoints.push(1)
            return console.log("Fire & Water: Computer Wins")
        } else {
            playerpoints.push(1)
            return console.log("Fire & Grass: Player Wins")
        }

    } else if (playerSelection == 'water') {
        if (computerSelection == "water") {
            return console.log("Water & Water: Draw")
        } else if (computerSelection == "fire") {
            playerpoints.push(1)
            return console.log("Water & Fire: Player Wins")
        } else {
            computerpoints.push(1)
            return console.log("Water & Grass: Computer Wins")
        }
    } else if (playerSelection == 'grass') {
        if (computerSelection == "grass") {
            return console.log("Grass & Grass: Draw")
        } else if (computerSelection == "water") {
            playerpoints.push(1)
            return console.log("Grass & Water: Player Wins")
        } else {
            computerpoints.push(1)
            return console.log("Grass & Fire: Comptuer Wins")
        }
    } else {
        return console.log("Please refresh and enter a correct value")
    }
}

function playGame() {
    for (let i = 0; i <5; i++) {
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection);
        return console.log((playerpoints, computerpoints))
    }
}

const playerpoints = []
const computerpoints = []
const playerSelection = getplayerChoice();
const computerSelection = getComputerChoice();
console.log("The computer has choosen " + computerSelection)
//console.log(playRound(playerSelection, computerSelection))
playRound(playerSelection, computerSelection);
console.log(playerpoints, computerpoints)