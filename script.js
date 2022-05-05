let capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

let computerPlay = () => Math.random()*3>=1?Math.random()*2>=1?'Rock':'Paper':'Scissors'
let playerPlay = () => {
    let play = prompt('What do you choose?\nRock, Paper or Scissors?',computerPlay()).toLowerCase()
    if (play != 'rock' && play != 'paper' && play != 'scissors') {
        return prompt('INVALID SELECTION!\n\nWhat do you choose?\nRock, Paper or Scissors?',computerPlay()).toLowerCase()
    }else{
        return play
    }
}


let playRound = (playerSel,computerSel) => {
    if (playerSel == 'rock' && computerSel == 'Scissors' 
    || playerSel == 'scissors' && computerSel == 'Paper' 
    || playerSel == 'paper' && computerSel == 'Rock') {
        alert(`Computer Chose ${computerSel}`)
        return {score:{p:1,c:0},message:`${capitalize(playerSel)} beats ${computerSel}!\nPlayer WINS this round!`}
    }
    else if (playerSel == 'paper' && computerSel == 'Scissors' 
    || playerSel == 'rock' && computerSel == 'Paper' 
    || playerSel == 'scissors' && computerSel == 'Rock') {
        alert(`Computer Chose ${computerSel}`)
        return {score:{p:0,c:1},message:`${computerSel} beats ${capitalize(playerSel)}!\nComputer WINS this round!`}
    }
    else{
        alert(`Computer Chose ${computerSel}`)
        return {score:{p:0,c:0},message:`${capitalize(playerSel)} and ${computerSel} are friends!\nIt's a TIE!`}
    }
}

function game(rounds) {
    if (rounds%2) {
        let score = {p:0,c:0}
        let roundOutput = {score:{p:0,c:0},message:'Let\'s Begin!\n\nWhat do you choose?\nRock, Paper or Scissors?'}
        for (let roundsPlayed=0;roundsPlayed<rounds;){
            roundOutput = playRound(playerPlay(),computerPlay())
            score.p += roundOutput.score.p
            score.c += roundOutput.score.c
            roundsPlayed = score.p + score.c
            alert(`${roundOutput.message}\n\n${roundsPlayed == rounds?`GAME OVER! - FINAL `:``}SCORE\nPlayer - ${score.p}\nComputer - ${score.c}\n\n${roundsPlayed == rounds ? `${score.p>score.c?'Player':'Computer'} WINS!!!`:`${rounds-roundsPlayed} Rounds Left`}`)
        }
    }
    else {
        game(prompt('You must choose an odd number.\nHow many games would you like to play?'))
    }
}