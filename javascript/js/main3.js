//Numbers

//An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float which
//reference the "floating point"
const myFloat = 42.03452 ;
const myString = "42";

console.log(myNumber);
console.log(myString);
console.log(myNumber === myString);
console.log(myNumber === myFloat);
console.log(myString + 4);
console.log(Number(myString) + 5);
console.log(Number("ahfhi") ); // return NaN because it is not a number
// 0 == false in javascript
console.log(Number(false) )

// NUMBER METHOD
//The Number.isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method parses an argument and returns a floating point number,
// If a number cannot be parsed from the argument, it returns NaN.

//The toFixed() method formats a number according to how many decimal points you as the parameter.

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myString));
console.log(typeof myFloat.toString()); // typeof is to verify
console.log(Number.parseFloat(myString));

//chaining= using several methods chained together
console.log(Number.parseFloat("4.2423sda").toFixed(2).toString());

//NaN is an acronym for Not a Number
//The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

// The global isNaN() function determines wheather a value is NaN or not 

console.log(isNaN("hi"))

