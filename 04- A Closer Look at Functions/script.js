"use strict";

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

/*
createBooking("LM13");
createBooking("LM13", 13);
createBooking("LM13", 13, 300);
createBooking("LM13", undefined, 300);
*/

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

/*
const greet = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};
*/
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
