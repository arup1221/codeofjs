//Modules
// if you use module keyword in html code then don't need to use defer keyword, it is for also use module in javascript, without typing "use strict";  js going to strict mode
// import playGuitar from "./guitar30.js";
// import { shredding as shred,plucking as fingerpicking } from "./guitar30.js";

// console.log(playGuitar());
// // console.log(shredding()); 
// console.log(shred()); 
// // console.log(plucking());
// console.log(fingerpicking());

import * as Guitars from "./guitar30.js";
// console.log(Guitars.default());
import User from "./user31.js";
const me = new User("hotmail@gmail.com","Arup");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// check "can I use ------" website for check support