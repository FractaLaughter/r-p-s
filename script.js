let computerPlay = () => {
    return 'Rock'
}

function playRound(playerSelection,computerSelection) {
    
    // declare winner/loser
    let outcome = ['WON','beats']

    // return final string
    return `You ${outcome[0]}! ${playerSelection} ${outcome[1]} ${computerSelection}.`
}


console.log(playRound('rock', 'Scissors'))