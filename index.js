
function getplayerChoice(){
    const playerSelection = prompt("What Pokemon Type will you choose; Fire, Water, or Grass? ")
    console.log("You have choosen " + playerSelection +" as your type")
    return playerSelection
}

function getComputerChoice() {
    const computerchoice = ['fire', 'water', 'grass' ];
    const type = computerchoice[Math.floor(Math.random()* computerchoice.length)]
    return type
}

function playRound (){
    playerSelection.toLowerCase();
    if (playerSelection == 'fire') {
        if (computerSelection == "fire") {
            return console.log("Fire & Fire: Draw")
        } else if (computerSelection == "water") {
            return console.log("Fire & Water: Computer Wins")
        } else {
            return console.log("Fire & Grass: Player")
        }

    } else if (playerSelection == 'water') {
        if (computerSelection == "water") {
            return console.log("Water & Water: Draw")
        } else if (computerSelection == "fire") {
            return console.log("Water & Fire: Player Wins")
        } else {
            return console.log("Water & Grass: Computer Wins")
        }
    } else if (playerSelection == 'grass') {
        if (computerSelection == "grass") {
            return console.log("Grass & Grass: Draw")
        } else if (computerSelection == "water") {
            return console.log("Grass & Water: Player Wins")
        } else {
            return console.log("Grass & Fire: Comptuer Wins")
        }
    } else {
        return console.log("Please refresh and enter a correct value")
    }

const playerSelection = getplayerChoice();
const computerSelection = getComputerChoice();
console.log("The computer has choosen " + computerSelection)
console.log(playerSelection, computerSelection)