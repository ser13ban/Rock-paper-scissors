const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_LOST = "LOST";
const RESULT_WON = "WON";
let isGameRunning = false;

const getPlayersChoice = function () {
  let selection = "error";
  while (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    selection = prompt("Rock, papper or scissors?", "").toUpperCase();
  }
  return selection;
};
const getComputerChoice = function () {
  const randValue = Math.random();
  if (randValue <= 0.33) {
    return ROCK;
  } else if (randValue <= 0.66) {
    return PAPER;
  } else if (randValue <= 1) {
    return SCISSORS;
  }
};

const whoWon = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === PAPER) ||
    (pChoice === PAPER && cChoice === ROCK)
  ) {
    return RESULT_WON;
  } else {
    return RESULT_LOST;
  }
};
startGameBtn.addEventListener("click", function () {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("the game has started");
  const playerSelection = getPlayersChoice();
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const winner = whoWon(playerSelection, computerChoice);
  console.log(winner);
  let message = `You chose ${playerSelection.toLocaleLowerCase()}, the computer chosed ${computerChoice.toLowerCase()}, therefore `;
  if (winner === RESULT_DRAW) {
    message += "you had a draw";
  } else if (winner === RESULT_LOST) {
    message += "you LOST";
  } else {
    message += "you WON";
  }
  console.log(message);
  alert(message);
  isGameRunning = false;
});
