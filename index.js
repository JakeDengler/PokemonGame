const playerSelection = prompt("What Pokemon Type will you choose; Fire, Water, or Grass? ")
console.log("You have choosen " + playerSelection +" as your type")

function getComputerChoice() {
    const computerchoice = ['Fire', 'Water', 'Grass' ];
    const type = computerchoice[Math.floor(Math.random()* computerchoice.length)]
    return type
}

const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection)