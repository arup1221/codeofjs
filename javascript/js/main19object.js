//Objects
// Key-value pairs in curly braces

// const vehicle = {
//     wheels: 4,
//     engine: function(){
//         return "vroommm!"
//     },
//     horn : function(){
//         return "poooook Poooook"
//     }
// };

// const truck = Object.create(vehicle);  //inherits from vehicle object

// truck.doors =  2;
// console.log(truck);
// console.log(truck.doors);
// console.log(truck.horn());
// console.log(truck.wheels);
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 3;
// car.engine = function(){
//     return "whooooosh!";
// }
// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car); //Inherits from car
//  console.log(tesla.wheels);
// tesla.engine = function() {
//     return "sushhh!";
// };
// console.log(tesla.engine());

const band = {
    vocals: "Robert plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham",
    horen : "pokpok"
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums")); // false.. drums are deleted


// console.log(Object.keys(band));  // keys 
// console.log(Object.values(band)); // keys values...


// for(let job in band){  //for in loop
//     console.log(`On ${job}, it's ${band[job]}!`);
// }

// destructuring things         //////////////////////////////

const {guitar: myVeriable, bass : hasMuk} = band;
console.log(myVeriable);
// console.log(hasMuk);
const {vocals,guitar,bass,drums} = band;
// console.log(guitar);
console.log(bass);

function sings({guitar}) {
    return `${guitar} sings!`;
}
console.log(sings(band));
