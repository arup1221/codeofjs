//function
//Methods = Built-in Function!

// function sum(num1, num2){
//     if(num2=== undefined){
//         return num1 + num1;
//     }
//     return num1 +num2;
// }

// console.log(sum(2));

// function getUserNameFromEmail(email){
//    return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("danzo_dragon@hotmail.com"));




//another way to declare a function anonymous

const getUserNameFromEmail=(email)=>{
    return email.slice(0,email.indexOf("@"));
};
console.log(getUserNameFromEmail("danzo_dragon@hotmail.com"));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("bYBY"));