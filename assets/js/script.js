function betWin()
{
const bet = document.getElementById("bet");
console.log(bet.value)

const win = document.getElementById("win");
console.log(win.value)

const oddsTotal = parseFloat(bet.value) + parseFloat(win.value);
console.log(oddsTotal)

const playerWinChance = ((parseFloat(bet.value) / oddsTotal)*100);
console.log(playerWinChance)

const playerNumber = (playerWinChance * oddsTotal);
console.log(playerNumber)

const min = 0;
const max = oddsTotal;
winningNumber = Math.round(Math.random() * (max - min) + (min));
console.log(winningNumber);

if (playerNumber <= winningNumber) {
    outcome = "You Win";
    

  } else {
    outcome = "You Lose";
}

console.log(outcome)
}