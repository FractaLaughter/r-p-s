const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const computerPlay = () => Math.random()*3>=1?Math.random()*2>=1?'Rock':'Paper':'Scissors'

const playerPlay = () => {
    const play = prompt('What do you choose?\nRock, Paper or Scissors?',computerPlay()).toLowerCase()
    if (play != 'rock' && play != 'paper' && play != 'scissors') {
        return prompt('INVALID SELECTION!\n\nWhat do you choose?\nRock, Paper or Scissors?',computerPlay()).toLowerCase()
    }else{
        return play
    }
}

const playRound = (playerSel,computerSel) => {
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

function game() {
    let rounds = prompt('How many rounds would you like to play?')
    if (rounds === null || rounds == 0){
        return
    }
    else if (rounds%2==1) {
        let score = {p:0,c:0}
        let roundOutput = {}
        for (let roundsPlayed=0;roundsPlayed<rounds;){
            roundOutput = playRound(playerPlay(),computerPlay())
            score.p += roundOutput.score.p
            score.c += roundOutput.score.c
            roundsPlayed = score.p + score.c
            alert(results(rounds-roundsPlayed,roundOutput,score))
        }
    }
    else {
        game(prompt('You must choose an odd number.\nHow many games would you like to play?'))
    }
}

const results = (roundsLeft,roundOutput,score) => 
`${roundOutput.message}

${!roundsLeft ? `GAME OVER! - FINAL ` : ``}SCORE
Player - ${score.p}
Computer - ${score.c}

${!roundsLeft?`${score.p>score.c?'Player':'Computer'} WINS!!!`:`${roundsLeft} Round${roundsLeft!=1?'s':''} Left`}`
