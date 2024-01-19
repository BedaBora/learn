"use strict";

/*
    A function is a piece of code that we can use over and over again.

*/
/*
// defining the function
function logger(message) {
  console.log(message);
}

// calling/running/invoking the function
logger("Hello");

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // this function returns a value
}

logger(fruitProcessor(5, 2));
*/

//FUNCTION DECLARATION VS EXPRESSION

/*
    main difference between funtion declaration and expression is
    in function declaration, the function can be called before the function is declared
    but in a function expression, we cannot call it until we define it
    this happends because of hoisting.
    preferably use function expression
*/
/*
//declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge(1997));

//expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1990));

// ARROW FUNCTIONS - a special form of function expression
const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(1658));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Beda"));

// FUNCTIONS CALLING OTHER FUNTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice; // this function returns a value
}

console.log(fruitProcessor(2, 3));
*/

/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

const checkWinner = (avgDolphins, avgKoalas) => {
  let msg;
  if (avgDolphins >= 2 * avgKoalas) {
    msg = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    msg = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    msg = "No team wins...";
  }
  console.log(msg);
};
