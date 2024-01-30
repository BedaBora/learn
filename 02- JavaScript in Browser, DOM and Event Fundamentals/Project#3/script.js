"use strict";

let currPlayer = 0;
let currScore = 0;

const activateCurrPlayer = () => {
  const player = document.querySelector(`.player--${currPlayer}`);
  player.classList.add("player--active");
};

const deactivateCurrPlayer = () => {
  const player = document.querySelector(`.player--${currPlayer}`);
  player.classList.remove("player--active");
};

const switchPlayer = () => {
  deactivateCurrPlayer();
  currPlayer = currPlayer === 1 ? 0 : 1;
  activateCurrPlayer();
};

const resetGame = () => {
  if (currPlayer === 1) {
    switchPlayer();
  }
  const currentScores = document.querySelectorAll(".current-score");
  const scores = document.querySelectorAll(".score");
  for (let i = 0; i < scores.length; i++) {
    scores[i].textContent = 0;
  }
  for (let i = 0; i < currentScores.length; i++) {
    currentScores[i].textContent = 0;
  }
};

const rollDice = () => {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  const diceElem = document.querySelector(".dice");
  diceElem.classList.remove("hidden");
  diceElem.src = `images/dice-${diceNum}.png`;
  const score = document.getElementById(`current--${currPlayer}`);
  if (diceNum != 1) {
    currScore += diceNum;
    score.textContent = currScore;
  } else {
    currScore = 0;
    score.textContent = 0;
    switchPlayer();
  }
};

const holdScoreHandler = () => {
  const currPlayerScore = document.getElementById(`score--${currPlayer}`);
  const score = document.getElementById(`current--${currPlayer}`);

  const highScore = Number(currPlayerScore.textContent) + currScore;
  currPlayerScore.textContent = highScore;
  currScore = 0;
  score.textContent = 0;
  if (highScore >= 100) {
    alert(`Player ${currPlayer} Wins`);
    resetGame();
  } else {
    switchPlayer();
  }
};

const diceRoller = document.querySelector(".btn--roll");
const newGame = document.querySelector(".btn--new");
const holdScore = document.querySelector(".btn--hold");

diceRoller.addEventListener("click", rollDice);
newGame.addEventListener("click", resetGame);
holdScore.addEventListener("click", holdScoreHandler);
