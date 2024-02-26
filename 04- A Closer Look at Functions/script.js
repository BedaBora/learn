"use strict";

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  //   numPassangers = numPassangers || 1; ES5 way
  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
*/
/*
createBooking("LM13");
createBooking("LM13", 13);
createBooking("LM13", 13, 300);
createBooking("LM13", undefined, 300);
*/

/*
const flight = "A304";
const jonas = {
  name: "Beda Bora",
  passport: "ATHY558934",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === "ATHY558934") {
    //alert("Checked in");
  } else {
    //alert("Wrong passport");
  }
};

// flight variable is passed as value hence this value is not changed
// jonas variable is passed as reference since it is an object type
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//First class functons
//functions are first-class citizens. they are treated as values
// functions ar just a type of object
// we can return a function from another function.
// we can also call methods on functions

// High order functions
// functions that receive another function as argument
// and returns a new function

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform(`Javascript is best`, upperFirstWord);
transform(`Javascript is best`, oneWord);

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Beda", "Martha", "Adam"].forEach((str) => {
  transform(str, oneWord);
});
*/
/*
const greet = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};
*/
/*
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHey = greet("Hey");
greetHey("Beda");

greet("Hello")("Beda");

const lufthansa = {
  name: "Lufthansa",
  iataCode: "LM",
  bookings: [],
  book(flightNum, passangerName) {
    console.log(
      `${passangerName} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${passangerName}`,
    });
  },
};

lufthansa.book(239, "John");
lufthansa.book(240, "JohnS");

const euroWings = {
  name: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

//book(23, "Bdea")//error because in this context, this keyword is pointing to parent body and body doesnt have the airline keyword

// Call method
// first argument is a object where we want to point the this keyowrd to
// other arguments are the parameters to the function
book.call(euroWings, 23, "Beda");

book.call(lufthansa, 23, "Beda");

const swiss = {
  name: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 23, "Mary");

// Apply is same as call but instead of sending arguments seperately, we pass them as array
book.apply(euroWings, [23, "Lalal"]);

//Bind mehtods
// bind methods returns a new function that is linked to the object passed.
const bookEW = book.bind(euroWings);
bookEW(34, "Steve");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("V");

//The order matters in bind method
//const bookEWBeda = book.bind(euroWings, undefined, "Beda");
//bookEWBeda(15);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyNewPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//here this will point to the elements hence will not work
// document.querySelector(".buy").addEventListener("click", lufthansa.buyNewPlane);

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyNewPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);

*/

//------------------ CHALLENGE #1 ------------------//
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?The Complete JavaScript Course 21
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
*/

/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    if (isNaN(answer) || answer < 0 || answer > 3) {
      alert("Select a number from the options");
    } else {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults("string");
    }
  },

  displayResults(type = "array") {
    type === "array"
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(" ")}`);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, "string");
*/

// we can run this fucntion multiple times
// const runOnce = function () {
//   console.log("Run this only once");
// };

// runOnce();

// This function is immediately invoked but never again
// by wrapping the function in (), we define a scope
(function () {
  console.log("Run this only once");
})();
