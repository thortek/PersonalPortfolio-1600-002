/* Variables - containers that store values */

var name // a declared variable, but not initialized (no value) and it's in the global scope (BAD)

let foo // a declared variable that can be changed

const bar = 'Bar' // a declared variable that cannot be changed - short for 'constant'

// '=' is the assignment operator, read it as "is assigned the value of..."

const ANSWER = 42

// Strings

let string1 = "Hello World!"

let string2 = 'Hello Utah!'

let string3 = new String("Hello New World!")

// Numbers

let myNum = 239874928734

let myNum2 = 75.43

"1" == 1 // true, because of type coercion and loose equality checking
"1" === 1 // false because this is strict equality checking

// Boolean

let myBool = false

// Array

let myArray = [] // this is an empty array

//              0     1      2        3     4
let myArray2 = [42, "Bob", myBool, ANSWER, true]

let secondElement = myArray2[1];

let lastItem = myArray2[myArray2.length - 1];

myArray2.push("Thor"); // added an element to the end of myArray2

myArray2.unshift("Hello World!");

let myLongString =
  "woiru4875875nswiufiuro248u5kdsjfowieurewlkjfoweurlehroihsfdadfasdf";

myLongString.length;

// Object

let minObject = {};

const myCar = {
  make: "Chevrolet",
  color: "Red",
  year: "1965",
  vin: "204385u4oirskjwoiru94839492owi9u390"
};

myCar.numDoors = 2;

const anotherObject = {
  wordz: ["foo", "bar", "baz"],
  car: {
    make: "McLaren",
    model: "675LT"
  },
  awesome: true
};

// Functions

function myFunction() {
  return "My greeting to you...";
}

function sumTwoThings(one, two) {
  return one + two;
}