//Array
// const myArray = [ ];

// //add element to an array
// myArray[0] = "Arup";
// myArray[1] = 1001;
// myArray[2] = false;

//refer to an array
// console.log(myArray);

//length property
// console.log(myArray.length);

//last element in an array
// console.log(myArray[myArray.length -1]);

// console.log(myArray[1]);

// myArray.push("school");
// myArray.unshift(42);

// console.log(myArray);


// myArray.pop();

// console.log(myArray);

// const lastItem = myArray.pop();

// console.log(lastItem);

// const newLength = myArray.push(42);
// console.log(newLength);

// const firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);

// delete myArray[1];

// console.log(myArray);
// console.log(myArray[1]);

// myArray.splice(1,1,12);
// console.log(myArray);
// console.log(myArray[1]);

///////////////////////////////////////////////////////////////

// const myArray = ["a","b","c","d","e","f"];

// const newArray = myArray.slice(2,5);
// myArray.reverse();
// console.log(myArray);

// const newString = myArray.join();
// const newArray =newString.split(",")
// console.log(newString);
// console.log(newArray);

// const myArray1 = ["a","b","c"];
// const myArray2 =["d","e","f"];

// const newArray = myArray2.concat(myArray1);
// const newArray = [...myArray1,...myArray2]; 
// console.log(newArray);


//nested Array
const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball","golf ball", "tennis ball"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweet tops", "sweet-pants", "hoodies"];

const equipDept = [equipShelfA,equipShelfB];
const clothesDept = [clothesShelfA,clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept,clothesDept];
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[0][1][2]);
console.log(sportsStore[0][0][1]);

