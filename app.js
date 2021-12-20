function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
let winCount = 0;
let computerWin = 0;
function round(computerSelection, playerSelection) {
    console.log(playerSelection);
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return 'Tie';
                case 'paper':
                    computerWin++;
                    return 'Paper beats Rock, you lose!';
                case 'scissors':
                    winCount++;
                    return 'Rock beats Scissors, you win!';
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    winCount++;
                    return 'Paper beats Rock, you win!';
                case 'paper':
                    return 'Tie';
                case 'scissors':
                    computerWin++;
                    return 'Scissors beats papers, you lose!';
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    computerWin++;
                    return 'Rock beats Scissors, you lose!';
                case 'paper':
                    winCount++;
                    return 'Scissors beats Paper, you win!';
                case 'scissors':
                    return 'Tie';
            }
        default:
            return 'Only rock, paper or scissors!';
    }
}
let resultsDiv = document.querySelector(".results");
let buttons = Array.from(document.querySelectorAll("button"));
buttons.map((button) => button.addEventListener("click", getButtonClicked));
function getButtonClicked(event) {
    // this function is literal spaghetti code lol
    let results = document.querySelectorAll("p");
    let h2 = document.createElement("h2");
    let clicked = (event.target.innerHTML);
    let result;
    if (results.length <= 4) {
        result = round(computerPlay(), clicked.toLowerCase());
        // shows results of current game played
        let p = document.createElement("p");
        p.textContent = result;
        // h2 to keep track of win/games
        h2.textContent = `${winCount}/${results.length + 1}`;
        resultsDiv.append(p);
        resultsDiv.append(h2);
    }
    if (results.length == 5) {
        let buttonsDiv = document.querySelector(".buttons");
        while (buttonsDiv.firstChild) {
            buttonsDiv.removeChild(buttonsDiv.lastChild);
        }
        if (winCount > computerWin) {
            h2.textContent = `You won ${winCount} times, computer won ${computerWin} times, you win!`;
        }
        else {
            h2.textContent = `You won ${winCount} times, computer won ${computerWin} times, you lose :(`;
        }
        resultsDiv.prepend(h2);
    }
}
//# sourceMappingURL=app.js.map