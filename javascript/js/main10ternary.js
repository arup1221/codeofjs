//Conditionals: Ternary Operator

//syntax:
//condition ? ifTrue : ifFalse;

let soup = "Chicken soup";
// let response = soup ? "yes, we have soup" : "sorry, no soup today";

// console.log(response);

// let isCustomerBan = false;
// let soupAccess = isCustomerBan ? "Sorry, no soup for u": soup ?`yes, we have ${soup} today` : "Sorry, no soup Today";

// console.log(soupAccess);

let testScore = 94;
let myGrade = testScore > 89 ? "A"
:testScore > 79 ? "B"
:testScore > 69 ? "C"
:testScore > 59 ? "D"
: "F";

console.log(`My grade is a ${myGrade}`)
