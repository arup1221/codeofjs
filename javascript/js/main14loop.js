//loop
// let myNumber = 0;
// while(myNumber < 5){
//     myNumber+=2;
//     console.log(myNumber);
//     // myNumber++;
// }
// do{
  
//     console.log(myNumber);
//     myNumber++;
// }while(myNumber < 5);


//for loop
// for(let i = 0; i<5; i++){
//     console.log("the number "+i);
// }

// let name = "Arup";
// for(let i = 0; i<= name.length; i++){
//     console.log(name.charAt(i));
// }

// let name = "Arup";
// let counter = 0;
// let myLetter;
// while(true){
//     myLetter = name[counter];
//     console.log(myLetter);
//     if(myLetter === "p") break;
//     counter++;
// }

let name = "Arup";
let counter = 0;
let myLetter;
while(counter<=3){
    myLetter = name[counter];
    console.log(myLetter);
    if(counter === 1){
        counter += 2;
        continue;
    }
    if(myLetter === "u") break;
    counter++;
}
console.log(counter);


