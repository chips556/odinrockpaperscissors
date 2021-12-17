function computerPlay() {
    let randNum = Math.floor(Math.random() * 3)
    switch (randNum) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function round(computerSelection) {
    let playerSelection = prompt('Pick rock, paper or scissors').toLowerCase()
    console.log(playerSelection)
    switch (playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                return 'Tie'
                case 'paper':
                return 'Paper beats Rock, you lose!'
                case 'scissors':
                return 'Rock beats Scissors, you win!'
            }
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                return 'Paper beats Rock, you win!'
                case 'paper':
                return 'Tie'
                case 'scissors':
                return 'Scissors beats papers, you lose!'
            }
        case 'scissors':
            switch(computerSelection) {
                case 'rock':
                return 'Rock beats Scissors, you lose!'
                case 'paper':
                return 'Scissors beats Paper, you win!'
                case 'scissors':
                return 'Tie'
            }
        default:
            return 'Only rock, paper or scissors!'
    }
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(round(computerPlay()))
    }
}

game(5)