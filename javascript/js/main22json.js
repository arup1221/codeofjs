//JSON -- JavaScript Object Notation 

/* JSON is used to send and received data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & received data in many languages.
...not just in JavaScript.
*/

const myObj = {
    name: "arup",
    hobbies: ["eat", "sleep"],
    gaming: "PUBG",
    hello: function(){
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);  // cannot access it because it is JSON type or string type


const receivedJSON = JSON.parse(sendJSON);  // to convert json type to object type
console.log(receivedJSON);
console.log(receivedJSON.name);
console.log(typeof receivedJSON);
