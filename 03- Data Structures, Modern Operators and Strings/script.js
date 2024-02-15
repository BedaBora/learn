"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// We can also compute the variable names on the fly
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhances object literal
  openingHours,
  order(startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },

  //ES6 enhances object literal
  orderDelivery({ startIndex, mainIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// ARRAY DESTRUCTURING- It is a way of unpacking values from and array or object into seperate variables
/*const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr; // array destructuring
console.log(x, y, z);

// const [first, second] = restaurant.categories;// takes in first and second element
// console.log(first, second);

// const [first, , third] = restaurant.categories; // takes in first and third item

let [main, , secondary] = restaurant.categories;

//swapping without destructuring
// console.log("Before swapping", main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("After swapping", main, secondary);

// swapping using destructuring
console.log("Before swapping", main, secondary);
[main, secondary] = [secondary, main];
console.log("After swapping", main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
// read the given values if the value is not found during destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
// OBJECT DESTRUCTURING
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//assign our own name to the extracted object properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const object = { a: 23, b: 7, c: 14 };
//{ a, b } = object; // we need to cover it in paranthesis
//because when we start a line with { in js, js expects a code block.
//to make js understand it is destructuring and reassignment, we cover it in ()
({ a, b } = object);

// Destructuring objects inside the object
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);
restaurant.orderDelivery({
  time: "22:30",
  address: "viva la vida",
  mainIndex: 2,
  startIndex: 2,
});
*/

/*
// SPREAD OPERATOR
// The spread operator can be used to expand array to its individual elements
console.log(...[1, 2, 3, 4, 5, 6]);

const arr = [7, 8, 9, 10, ...[11, 12, 13]]; // 7, 8, 9, 10, 11, 12, 13
const arr2 = [1, 2, 3, ...arr]; // 1, 2, 3, 7, 8, 9, 10, 11, 12, 13
console.log(arr);
console.log(arr2);

//Diff between spread operator an destructuring
// spread operator returns all the elements in the array as individual values and doesbt create new variables.
// destructuring returns the individual elements and new variables

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menus);

//***The spread operator works on all iterables like string, array, set, map/
const str = "Beda";
console.log([...str, " ", "B."]);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1 ?"),
//   prompt("Ingredient 2 ?"),
//   prompt("Ingredient 3 ?"),
// ];

//restaurant.orderPasta(...ingredients);

// Since ES18, spread operator works on objects as well
const newRest = { ...restaurant, founder: "Beda" };
newRest.name = "Hahah";
console.log(restaurant);
console.log(newRest);
*/

/*
// REST OPERATOR
// it is similar to the spread operator but unlike spread which expands array to individual elements
// the rest operator condenses multiple elements into and array

// spread operator, used on right side of equal operator
const arr = [1, 2, ...[3, 4, 5]];

// rest operator, used on left side of equal operator
const [a, b, ...arr2] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a, b, arr2);

// the rest element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// In objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// In functions
const add = function (...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [5, 10, 15];
add(...x);

restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
*/

/*
// SHORT CIRCUITING
console.log(0 || "Jonas"); // if the first value is a truthy value, the second operand will not be evaluated
console.log(3 || "Jonas");
console.log(undefined || "Jonas");
console.log(undefined || 0 || "" || "Hello" || 23 || null); // It will return the first occurance of a truthy value

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); //10

// restaurant.numGuest = 23;
// console.log(guest1); //23

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log("------ AND SHORT CIRCUITING --------");

console.log(0 && "Johnas"); // trailing operations are evaluated only when the prev value is a truthy value
console.log(1 && "Hello" && "Johnas"); // Where OR shortcircuiting returns the first evaluated truthy value, AND shortcircuiting returns last evaluated truthy value

console.log("Hello" && 23 && null && "Beda"); // returns null

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushroom", "spinach");
// Summary
// OR operator will return the first truthy value of all occurance or last falsy value if all are falsy
// AND operator will return the first falsy value of all occurance or the last truthy value if all are truthy
*/
/*
restaurant.numGuest = 0;

const guest1 = restaurant.numGuest || 10;
console.log(guest1);

// we want the guest2 variable to get the value 0 but we are getting 10 since 0 is a falsy value
// to prevent this, we take the help of nullish coalescing introduced in ES2020

// Nullish :null and undefined
const guest2 = restaurant.numGuest ?? 10;
console.log(guest2); //0 the nullish coalescing operator works on the concept of nulish value instead of falsy value
*/

/*
// LOGICAL ASSIGNMENT
const rest1 = {
  name: "First",
  numGuests: 0,
};

const rest2 = {
  name: "Second",
  owner: "Mario",
};

// rest1.numGuests = rest1.numGuests || 11;
// rest2.numGuests = rest2.numGuests || 11;

//using the OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 11;

//using the NULL COALESCING assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 11;

// rest2.owner = rest2.owner && "<ANONYMOUS>";

//using the AND assignment operator
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);
*/

//------------------ CHALLENGE #1 ------------------//
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
// console.log(player1, player2);
const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);
const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);
const { team1, team2, x: draw } = game.odds;
// console.log(team1, team2, draw);

const printGoals = (...players) => {
  console.log(`${players} scored goals`);
  console.log(`Total of ${players.length} goals were scored`);
};

// printGoals("ala", "ala", "ala", "ala", "ala", "ala", "ala", "ala");
console.log(
  (team1 < team2 && "Team 1 Wins") ||
    (team1 > team2 && "Team 2 Wins") ||
    "Its a draw"
);
*/

/*
// FOR-OF LOOPING
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
// OPTIONAL CHAINING

//Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining
// optional chaining operator ?. the field after . is computed only if the field before ? is not undefined
console.log(restaurant.openingHours?.mon?.open); // property mon will be excessed onli if opening hour exists

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(restaurant.openingHours[day]?.open);
}

console.log(restaurant.order?.(0, 1) ?? "Method dont exist");
console.log(restaurant.orderResotto?.(0, 1) ?? "Method dont exist");

const users = [{ name: "Beda", email: "beda@gmail.com" }];

console.log(users[0]?.name ?? "User empty");
*/

/*
// LOOPING OVER OBJECTS

// property names
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += ` ${day} `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//------------------ CHALLENGE #2 ------------------//
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
/*
//1
const goalScored = game.scored;
for (const [i, player] of goalScored.entries())
  console.log(`Goal ${i + 1}: ${player}.`);

//2
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

//3
for (const [team, odd] of Object.entries(game.odds))
  console.log(
    `Odd of ${(game[team] && "victory of " + game[team]) || "draw"}: ${odd}`
  );

//4
const scorers = {};
for (const scorer of goalScored)
  scorers[scorer] = (scorers[scorer] && scorers[scorer] + 1) || 1;

console.log(scorers);
*/
/*
// SETS
// set does not have any dupicates
// order of elements is set is not maintained
const orderesSet = new Set([
  "Pizza",
  "Pasta",
  "Pasta",
  "Pizza",
  "Risotto",
  "Risotto",
]);
console.log(orderesSet);

console.log(new Set("Beda"));
//Set methods
console.log(orderesSet.size);
console.log(orderesSet.has("Bread"));

orderesSet.add("Garlic Bread");
orderesSet.add("Garlic Bread");
orderesSet.delete("Pizza");
console.log(orderesSet);

console.log(orderesSet[0]); // will not work since in a set, there are not indices
// we can iterate over the set but there is no method to retrieve elements of a set
*/

// MAPS
// map is a ds that is used to store data in key value form
// in object, keys are always strings. but in maps, key can be any datatype

/*
const rest = new Map();
rest.set("name", "classico Italliano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); // the set method returns the new array
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are Open")
  .set(false, "we are closed");

//console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get([1, 2]));
console.log(rest.get(arr));
// wil return undefined. because behind the scene,
//js read the array in the key from the map and the one we defined differently

// Another way of creating a map
const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "try again"],
]);

console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt("your answer"));
//console.log(question.get(answer === question.get("correct")));

//convert map to array
console.log(...question);
*/

// Sources of data
// 1. From the program itself. i.e data written directly into source code
// 2. From ui. i.e data stored inside the DOM
// 3. from enternal sources. i.e data fetched from apis

// Deciding which ds to use to store data
/*
              |
        |           |
    Simple list   Key-value
        |           |
    array or set  map or objects


Arrays
- Use when we need ordered list of values
- when we need data manipulation

Sets
- Use when we need to work with unique vlaues
- use when high-performance is really important
- use to remove duplicates from array

Objects
- traditional key-value store
- easier to write and access values
- use when we need to include methods
- used when working with json

Maps
- better performance
- keys can ahve any data type
- easy to iterate and compute size
- use when we simply need to map key and values
- use when keys are not strings
*/

//------------------ CHALLENGE #2 ------------------//
/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
/*
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4
for (const [key, val] of gameEvents.entries()) {
  console.log(
    `[${(key <= 45 && "FIRST HALF") || "SECOND HALF"}] ${key}: ${val}`
  );
}
*/

// WORKING WITH STRINGS
// We may think of strings as array of characters
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(Number(plane[1]));
console.log(plane[2]);
console.log("8737"[2]);
console.log("8737".length);
console.log(airline.indexOf("r"));

// index method can be used to get the index of s string from where we want to extract a part of it
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === "B" || seatLetter === "E") {
    console.log(`${seat} is middle seat.`);
  } else {
    console.log(`${seat} is not middle seat.`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fixing Capitalization in passanger name
const passanger = "beDAbRata";
const passangerFixed =
  passanger[0].toUpperCase() + passanger.toLowerCase().slice(1);
console.log(passangerFixed);

// comparing email
const email = "hello.world.io";
const loginEmail = "   heLLO.World.IO \n";
console.log(email, loginEmail);
console.log(loginEmail.trim().toLowerCase() === email);

// Replacing part of string
const priceUS = "288.77$";
const priceGB = priceUS.replace(".", ",").replace("$", "€"); // replace method replaces only the first occurance
console.log(priceGB);

const announcements =
  "All passangers come to boarding door 23, Boarding door 23!";
//console.log(announcements.replaceAll("door", gate)); // replaceAll method is not yet available in js

// we can use regex to replace all occurances
console.log(announcements.replace(/door/g, "gate"));

// booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Air"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new airbus family");
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("get lost");
  } else {
    console.log("welcome");
  }
};

checkBaggage("I have a laptop, some Food and a pocket knife");
checkBaggage("Socks and camera");

// split and join
console.log("a+very+nice+string".split("+"));
console.log("Beda Bora".split(" "));
const [firstName, lastName] = "Beda Bora".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("john jmith davis");

// padding
const message = "GO to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskedCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(43578866954123);
console.log(maskedCreditCard(43578866954123));
console.log("4357886695412387070");
console.log(maskedCreditCard("4357886695412387070"));

//Repeat
const message2 = "Bad weather... All departures delayed...";
console.log(message2.repeat(5));

const placesInLine = function (n) {
  console.log(`There are ${n} planes waiting in line ${"✈️".repeat(n)}`);
};

placesInLine(5);
placesInLine(7);
