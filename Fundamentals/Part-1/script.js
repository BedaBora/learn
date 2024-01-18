// let js = "amazing";
// console.log(40 + 8 + 20);

/* 
    A Value is just a piece of data. Eg. "Jonas"
    We can store values in a variable to use the value over and over again
*/

//let firstName = "Jonas"; // Store the value Jonas in memory
// in JS, we use camelCasing convention to name variables
// Variable names cannot start with a number or any special character other than _
// Variable names cannot contain any special character other than _
// Reserved keywords cannot be used as variables names.
// Vaiables with all UPPER CASE are used as constants.
// Try to give meaningful names to the variables. For Eg. use firstJob instead of job1 as variable name

//console.log(firstName); // console.log() is used to write to console.

/* 
    DATA TYPES

    In JS,every value can be 
      an object Eg. let me = { name: 'Beda'}; or
      a primitive value. Eg. let name = 'Beda';
    
    In JS, we have 7 primitive data types
     1. number: Floating point numbers. Used for decimal and integers. Eg. let age = 26;
     2. strng: Sequence of character. Used for text Eg. let firstName = 'Beda';
     3. boolean: Logical type that can only be true or false. Eg. let isEmployed = true;
     4. undefined: Value taken by variable that is declared but not yet defined. Eg let children;
     5. null: also means empty value but diff from undefined.
     6. symbol: Value that is unique and cannot be changed
     7. bigint: Large integers values

    JS has dynamic typing. Data types are automatically determined at runtime.
*/
/*
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun); //typeof is an operator that can be used to know the data type of a variable
console.log(typeof 23);
console.log(typeof "Beda");

jsIsFun = "YES!!";
console.log(typeof jsIsFun);
let thisIsundefined;
console.log(typeof thisIsundefined);
console.log(typeof null); // this will print object. which is a bug in js
*/

/*
    let VS const VS var
    we use let and var to declare a variable whose value we plan to modify in the future
    we use const to make sure that the value of the variable cannot be changed once declared
    it is good practice to use const during variable declaration by default and only use let or var when absolutely required.

    var works almost same as let and was used before ES6. But we need to try to avoid it.

*/
/*
let age = 30;
const birthYear = 1997;
// birthYear = 1998; //This will throw and error
// const job; //This will also throw an error since we cannot reassign const, we need to declare it during variable definition
//We can declare variables without using let, const, var. But doing so exposes the variable to the global scope
lastName = "Beda";
console.log(lastName);
*/

/* 
    OPERATOR 
    operator allows us to transform or conbine multiple values
*/

/*
//MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
//2 ** 3 means 2^3

const firstName = "Beda";
const lastName = "Bora";
console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
console.log(x);

//COMPARISION OPERATORS
// >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
*/
/* OPERATOR PRECEDENCE
 We can look into the MDN documentation to understand the operator precedence table
 Operators with higher precedence are calculated first followed by lower precedence.
 Grouping operator has higher precedence, then mathematical, then comparator
 For ease, we may follow the BODMAS rule to understand precedence.
 Exponents have right to left precedence.
 Multiplication, subtration, addition, division have left to right precedence
 Assignment has lowest predecence. assignment has a right to left precedence
 */
/*
console.log(now - 1991 > now - 2018);
let a, b;
a = b = 25 - 10 + 5;
console.log(a, b); // 20 20
*/

// CHALLENGE #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

const massMark = 78;
const heightMark = 1.69;
const BMIMark = massMark / (heightMark * heightMark);

const massJohn = 92;
const heightJohn = 1.95;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

/*
// STRING AND TEMPLATE LITERALS
const firstName = "Beda";
const job = "Programmer";
const birthYear = 1998;
const year = 2037;
const beda =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job; // This is a string using concatination

console.log(beda);

const bedaNew = `I'm ${firstName} a ${year - birthYear} years old ${job}`; // This is a string using template literals. Note that template literals can be defined using '`' and variables inside it can be called using ${}
console.log(bedaNew);

console.log(
  "String \n\
with \n\
multiple lines"
); // A multiline string before ES6

console.log(`New
multi line
string`); // Multiline string after ES6
*/

// IF-ELSE Condition
/*
const age = 17;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is young with ${yearsLeft} years left`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// CHALLENGE #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let message;
if (BMIMark > BMIJohn) {
  message = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
  message = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
}
console.log(message);
*/

// TYPE CONVERSION VS COERCION
/*
  Type conversion refers to the manual conversion of one type to another
  Type coercion is when javascript automatically does the type conversion
*/
/*
//Type Conversion
const inputYear = "1991";
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); //Number(inputYear) converts the inputYear string to a number. But it does not change the original value
console.log(Number("JS")); //Number() on an invalid string results in NaN

console.log(String(1586)); // String() converts an number to a string

//Type Coercion
console.log("I am " + 65 + " years old."); // Type coercion in action as js automatically converts 65 into string
console.log("23" - "10" - 3); // Because of the - operator, string values are converted into number values
console.log("23" * "2"); // Because of the * operator, string values are converted into number values
console.log("a" - "b"); // result in NaN as a and b cannot be converted to a number
*/

// Truthy vs Falsy values
/*
    5 falsy values
    0, '', undefined, null, NaN
*/
/*
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean());
console.log(Boolean("Hello"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("Get a job");
}

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}
*/

// EQUALITY OPERATORS
/*
    JS has 2 type of equality operator.
    == this only compares the value and not the data type
    === this checks both data type and value.
    preferably always use === operator

    Similarly in not equal operator, we have != and !==
*/
const age = "18";
console.log(age == 18); // true
console.log(age === 18); // false

const favNumber = prompt("Enter your fav number");
if (Number(favNumber) === 23) console.log("23 is a cool number");
else if (Number(favNumber) === 7) console.log("7 is a cool number");
else console.log("You not cool");

if (Number(favNumber) !== 23) console.log("Why not 23?");
