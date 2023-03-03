// user input
// let myBoolean = confirm("Ok == True\n Cancel ==False");
// console.log(myBoolean);

// let name = prompt("please Enter your name: ");
// console.log(name);

let name = prompt("Enter your name");
if(name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}
else{
    console.log("You did't enter your name.")
}
