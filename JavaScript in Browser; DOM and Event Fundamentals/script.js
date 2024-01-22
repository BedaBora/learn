"use strict";

//Select element in the DOM through JS
//const msg = document.querySelector(".message"); // Select the element with message class
//console.log(msg.textContent);

/*
    What is a DOM?
    DOM or Document object Model is a structured representation of HTML DOCUMENTS.
    It allows JS to access html elements and styles to manipulate them

    document is a special object that is the entry point to the DOM.

    DOM is not a part of JS. JS is only one of the language used to modify the DOM.
    DOM methods and properties are a part of WEB APIs
    Other WEB APIs include timer, fetch etc
*/

// const msg = document.querySelector(".message");
// msg.textContent = "Hello"; // Set the content of the message class element to 'Hello'

// document.querySelector(".number").textContent = 2;
// document.querySelector(".score").textContent = 15;
// document.querySelector(".guess").value = 15; // Since .guess is an input field, we get the value with the .value property

/*
  An event is any action that happens to the webpage.
  we can intercept these events to do some meaningful work using event handlers
*/
/*
let secretNumber;
let score;

const setBoard = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  resetNumber();
  setScore(20);
};

const resetNumber = () => {
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
};

const setScore = (val) => {
  document.querySelector(".score").textContent = val;
};

const reduceScore = () => {
  if (score >= 1) {
    score--;
    setScore(score);
  }
};

const playerWin = () => {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").style.width = "60rem";
};

const validateGuess = (guess) => {
  let msg;
  if (!guess) {
    msg = "⛔ Please select a number";
  } else if (guess === secretNumber) {
    msg = "🥳 Correct Number!!";
    playerWin();
  } else if (guess > secretNumber) {
    msg = "📈 Too high!";
    reduceScore();
  } else {
    msg = "📉 Too low!";
    reduceScore();
  }

  if (score == 0) {
    msg = "You lost 😖";
  }
  return msg;
};

// We add event to the check button.
// The event we are trying to intercept is the click event
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  const msg = document.querySelector(".message");
  msg.textContent = validateGuess(guess);
});

setBoard();
*/

// MAKING THE NUMBER GUESS GAME
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const setScore = (val) => {
  const scoreElement = document.querySelector(".score");
  scoreElement.textContent = val;
};

const setMessage = (val) => {
  const msg = document.querySelector(".message");
  msg.textContent = val;
};

const setHighScore = (val) => {
  const highScoreElement = document.querySelector(".highscore");
  if (val > Number(highScoreElement.textContent)) {
    highScoreElement.textContent = val;
  }
};

const setBoard = (bodyColor, numWidth, numValue) => {
  document.querySelector("body").style.backgroundColor = bodyColor;
  document.querySelector(".number").style.width = numWidth;
  document.querySelector(".number").textContent = numValue;
};

const playerWin = () => {
  setBoard("#60b347", "60rem", secretNumber);
  setHighScore(score);
};

const playerLose = () => {
  setBoard("red", "60rem", secretNumber);
  setScore(0);
  return "You Lost!! 😖";
};

const validateGuess = (guess) => {
  let msg;
  if (!guess) {
    msg = "⛔ Please select a number";
  } else if (guess < 1 || guess > 20) {
    msg = "⚠️ Select a number between 1 and 20!";
  } else if (guess === secretNumber) {
    msg = "🥳 Correct Number!!";
    playerWin();
  } else {
    msg = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    setScore(--score);
  }
  return msg;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  let msg;
  if (score > 1) {
    msg = validateGuess(guess);
  } else {
    msg = playerLose();
  }
  setMessage(msg);
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setScore(score);
  setBoard("#222", "15rem", "?");
  setMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
