//variables
var name = 'Max';
var age = 29;
var hasHobbies = true;

//function declaration
// has its own this keyword. depending on how its called
// it is hoisted and can be used before definition
function summarizeUser(userName, userAge, userHasHobbies){
    return (
        'Name is '+ userName +
        ', age is '+ userAge +
        ' and the user has hobbies: '+ userHasHobbies
    )
};

//call the function
console.log(summarizeUser(name, age, hasHobbies));

// let & const
// var is not outdated syntax, modern syntax is let or const
// variables that will never change is declared as const
let myname = "Beda";
const myage = 27;
//age=30 this will throw error

//named funtion
// usually the name is optional. not hoisted. must be declared before use
const summarizeUserNamed = function (userName, userAge, userHasHobbies) {
    return (
        'Name is '+ userName +
        ', age is '+ userAge +
        ' and the user has hobbies: '+ userHasHobbies
    )
};

//arrow function 
// arrow function does not have its own this keyword. it inherits from surrounding scope. It also cannot access arguments object
const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
    return (
        'Name is '+ userName +
        ', age is '+ userAge +
        ' and the user has hobbies: '+ userHasHobbies
    )
};

// also an arrow funtion
// can omit the return keyword if there is only one statement
const add = (a, b) => a+b

//objects
const person = {
    name: "Beda",
    age: 27,
    greet () { 
        console.log("Hello, I am "+this.name) 
    }
}

//arrays
const hobbies = ['Sports', 'Cooking', ['nested hobby']]
for (let hobby of hobbies){
    console.log(hobby);   
}

//map can be used to transform the array and returns a new array
console.log(hobbies.map(hobby => 'Hobbies: '+ hobby))
console.log(hobbies)

// object and arrays are reference types
// hence after declaring the array as const, we can till add to the array
// reference types simply store the address of the value 

// slice simply copies the array to a new one
const copiedArray = hobbies.slice()
hobbies.push("new Hobby")
console.log(copiedArray)
console.log(hobbies)

//spread
//const copiedArray2 = [hobbies] this will create a nested array with hobbies as an array entry
const copiedArray2 = [...hobbies]
console.log(copiedArray2)

//rest
// this is not flexible if the no of elements increase
const toArray = (arg1, arg2, arg3) =>{
    return [arg1, arg2, arg3]
}

//enter the rest operator
//the ... agregates all the params into an array
const toArrayRest = (...args) => {
    return args
} 

//destructuring
const printName = (person) => {
    console.log(person.name);
}

//if we simply one or a set amount of data from object, we can do object destructuring
// the name variable will be pulled out from an object that has the given variables
const printNameDestructured = ({name}) => {
    console.log(name);
}

//can be sued for variabled as well
const {name, age} = person;

// can be used with objects
const hobbiesAgain = ['Sports', 'Cookies']
const [hobby1, hobby2] = hobbiesAgain

//nested callbacks
const fetchData = (callback) => {
    setTimeout(() => {
        callback("Done")
    }, 1500)
}

// async code -> codes that does not necessarily execute immidiately after one another
setTimeout(()=>{
    console.log("Timer is done");
    fetchData(text => {
        console.log(text)
    })
}, 2000)
//log is printed after 2 seconds but in the meantime, it does not block other execution

//Promises
const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1500)
    })
    return promise
}

setTimeout(()=>{
    console.log("Timer is done");
    fetchData().then(text => console.log(text))
}, 2000)

//template literals
const name3 = "Max";
const age3 = 29;
console.log(`My name is ${name3} and I am ${age3} years old.`);