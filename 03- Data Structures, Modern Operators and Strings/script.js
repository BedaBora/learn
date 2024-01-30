"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startingIndex, mainIndex) {
    return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ startIndex, mainIndex, address, time }) {
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
