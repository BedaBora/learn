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
