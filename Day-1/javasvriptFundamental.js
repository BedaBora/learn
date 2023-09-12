var myName = "Beda";
console.log(myName);

const summarizeUser = (userName, userAge, userHasHobby) =>
  `Name is ${userName}, age is ${userAge}, and user has hobbies: ${userHasHobby}`;
//IF we have one return statement only in an arrow function, we may omit the curly braces and the return function
console.log(summarizeUser("Beda", 26, false));

// let is function scoped
// var is global scoped
// const is function scoped and it does not change

// object in javascript
const person = {
  myName: "Beda",
  age: 26,
  greet: () => {
    console.log(`Hi, I am ${myName}`);
  },
};

person.greet();

//Arrays in JS
const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => `Hobby: ${hobby}`));

// .slice() copies the array, we can mention the no of elements to be copied
// we can use the spread operator ...
// The spread operator can be used to copy object as well.
// But be careful as it passes the reference to the

const coppiedArray = [...hobbies];
console.log(coppiedArray);

// the rest operator can be used to compile an array of the given arguments
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5, 6, 7, 7));

// Destructuring
// We used destructuring to extract the nmyName property of peron object
const printName = ({ myName }) => {
  console.log(myName);
};

printName(person);
// we can use destructuring on array
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// Async and promises
// The below is asynchronous because it takes a little time
// in this case, 2 sec.
// Node js does not block my code. and inserts it into the callstack
// And pulls it out of the callstack once the 2 sec is over
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1000);
  });
  return promise;
};

setTimeout(() => {
  console.log("timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("HEllo");
