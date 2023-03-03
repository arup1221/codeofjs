let person = {
    name: "arup",
    age: 30
}; // example of an object assigning


//dot notation
person.name = "john"; // now it might be change

//Bracket Notation
//person["name"] = "anny";

let selection = "name";
person[selection] = "anny";

console.log(person.name);