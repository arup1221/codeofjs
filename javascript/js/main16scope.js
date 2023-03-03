//scoping
// var x = 2;
// var x = 3; // no errors
// let x = 2;
//  x = 3;
// console.log(x);

//global scope
// var x = 2;
// let y = 3;
// const z = 4;

//local scope
// {
//    var x = 4;
// }

//local scope
// function myFunc(){
//     const z = 5;
// }

// console.log(z);

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    var x = 10;
    const z =5;
    // console.log(`function: ${x}`);
    // console.log(`function: ${y}`);
    // console.log(`function: ${z}`);



//block level
{
    var x = 11;// function scope
    const z = 6;  // block scope 
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
}
console.log(`function: ${x}`);
console.log(`function: ${y}`);
console.log(`function: ${z}`);

}
myFunc();
