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

let myArray2 = [42, "Bob", myBool, ANSWER, true]