function getComputerChoice() {
    let computerchoice = ['Fire', 'Water', 'Grass' ];
    let i = computerchoice[Math.floor(Math.random()* computerchoice.length)]
    return console.log("The computer's choice is " + i)
}

getComputerChoice.apply()


