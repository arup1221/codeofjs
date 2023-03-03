//Objects
//key-value pairs in curly braces

const myObj = {name: "Arup"};
// console.log(myObj.name);

const anotherObj = {
    alive: true,
    ans: 23,
    hobbies: ["eat", "sleep", "repeat"],
    beverage:{
        morning: "coffee",
        afternoon: "Iced tea"
    },
    action: function(){
        return "hello ";
    },
    actionn: function() {
        return `Time for ${this.beverage.afternoon}`;
    }
};
// console.log(anotherObj.hobbies[0]);
// console.log(anotherObj["beverage"]);
console.log(anotherObj.action());
console.log(anotherObj.actionn());