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

/*
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
*/

//ARRAYS
/*
  Arrays are like containers where we can store data to later retrieve them
*/
/*
const friends = ["John", "Steven", "Michael"]; //This is an array of strings
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994, 1995); // Another way of creating arrays
console.log(friends[0]); //Extract 1st element of array
console.log(friends[1]); //Extract 2nd element of array

console.log(friends.length); //Gets total number of elements in array
console.log(friends[friends.length - 1]); //Gets last element in array

friends[1] = "broo"; // mutate the array
console.log(friends);

const beda = ["Beda", "Bora", 2037 - 1998, friends]; //Array in JS can hold any type of values. An Array can contain another array

console.log(beda);

const calcAge = (birthYear) => 2037 - birthYear;

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// ARRAY METHODS
const age = years.map((year) => calcAge(year)); // the map operation will iterate over the elements of the array and transform it according the function mentioned
console.log(age);

friends.push("Nana"); // Add elements to the end of the array and returns length of the new array
friends.unshift("Johnny"); // Add elements to the begining of the array and returns the new array length

friends.pop(); // Removes last element of the array and returns it
friends.shift(); // Removes first element of the array and returns it
friends.indexOf("Steven"); // Returns the index of the element. If element doesnt exist returns -1
friends.includes("John"); // Returns true if element exists in the array. It does strict type checking
*/

//CHALLENGE #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/
/*
const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return 0.15 * billValue;
  } else {
    return 0.2 * billValue;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
*/

/*
//OBJECTS - Objects in js are defined as key-value pairs
const bedaArray = [
  "Beda",
  "Bora",
  2037 - 1998,
  "programmar",
  ["Steven", "Pan", "John"],
];

const beda = {
  firstName: "Beda",
  lastName: "Bora",
  age: 2037 - 1998,
  job: "programmer",
  friends: ["Steven", "Pan", "John"],
};
// The keys in object are also known as properties
// The order of these values do not matter.
console.log(beda);

//Properties of an object can be extracted using dot notation or bracket notation
console.log(beda.firstName); //using dot notation
console.log(beda["firstName"]); //bracket

//benefit of bracket notation is that we can put any expression inside the bracket that gets evaluated to ge the property
const nameKey = "Name";
console.log(beda["first" + nameKey]);
console.log(beda["last" + nameKey]);

beda.location = "India"; // Add property to the object
beda["iss"] = "hahah"; // Add property to the object
console.log(beda);

// OBJECT METHODS
// objects can store any type of values. even a function
const beda2 = {
  firstName: "Beda",
  lastName: "Bora",
  birthYear: 1998,
  job: "programmer",
  friends: ["Steven", "Pan", "John"],
  hasDrivingLicense: true,
  // calcAge: () => 2037 - this.birthYear, // arrow function does not have the this context
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  // after defining this.age, we have creat a new property in the object after calling this function
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
  },
};

console.log(beda2.calcAge());
console.log(beda2.age);
console.log(beda2.getSummary());
*/

// CHALLENGE#3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
}
*/

// LOOPS
/*
loops are a form of control structure that help us perform repetative tasks

*/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep}.`);
}

// Looping in arrays
const beda = ["Beda", "Bora", 2037 - 1998, ["lala", "lola", "lily"]];
let types = [];
for (let i = 0; i < beda.length; i++) {
  // if (typeof beda[i] !== "string") continue; // continue is used to skip the current iteration
  // if (typeof beda[i] === "number") break; // break is used to exit the loop.
  types[i] = typeof beda[i]; // Filling types array
  console.log(beda[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Looping backward
console.log("------IN REVERSE-----");
for (let i = beda.length - 1; i >= 0; i--) {
  console.log(i, beda[i]);
}

//Loop inside a loop
for (let i = 1; i < 4; i++) {
  console.log(`-------- Starting exercise ${i}`);
  for (let j = 1; j < 6; j++) {
    console.log(`Lifting weight ${j}`);
  }
}

// The while loop
/*
 diff between for and while loop is
 in while loop, we mention the condition only and we explicitely modify the variable inside the while iteration 
 in this sense while loop is more versatile.
 */

let myRep = 1;
while (myRep <= 10) {
  console.log(`Lifting weight ${myRep}`);
  myRep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//Make sure to use the while loop carefully to avoid infinite looping
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
