// //javascript Errors  and Errors handling
// "use strict";   //to check strictly code

// // const variable = "arup";
// // variable = "dave"; //simple error
// // console.log(variable);

// // Object.create();



// const makeError = () =>{
//     let i = 1;
//     while(i<=5){
//     try{
//         if(i % 2 !== 0){
//         // const naam = "arup";
//         // naam = "joe";

//         // throw new customError("this is a custom error!");
//         // throw new Error("this is a custom error!");
//         throw new Error("Odd number!");
//         }
//         console.log("Even number!");
//     }
//     catch(err){
//         // console.error(err.name); //looks like an error 
//         // console.error(err.message); //looks like an error  // message or stack
//         // logTheError(err.stack);  // record the logs of errors
//         console.error(err.stack);
//         // console.warn(err);     // looks like an warning
//         // console.table(err);     // looks like an table
//     }
//     finally {
//         console.log("...finally");
//         i++;
//     }
// }
    
// };
// makeError();
// // TypeError: Assignment to constant variable.
//     // at makeError (main23errorhand.js:14:14)

// // function customError(message) {
// //     this.message = message;
// //     this.name = "customError";
// //     this.stack = `${this.name}: ${this.message}`;
// // }
"use strict"
const makeError= ()=>{
try{
    const name = "arup";
    name = "a";
}
catch(err){
    console.error(err);
}
};
makeError();

