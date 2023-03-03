//Web Storage API
//not part of the DOM - refers to the Window API
//Available to js via the global variable: window
//we do not have to type window.It is implied. 
//example:
// window.alert(location); //same thing as
// alert(localStorage);

const myArray = ["eat","sleep","code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat","sleep"],
    logName: function() {
        console.log(this.name);
    }
};

// const myArray = ["eat","sleep","code"];
  
// sessionStorage.setItem("mySessionStore", myArray);
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData =JSON.parse(sessionStorage.getItem("mySessionStore"));//previously it is a string but when we get as a object then we use "JSON.parse()"
// console.log(mySessionData);


// localStorage.setItem("mySessionStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");// to remove the item form the local storage
// localStorage.clear(); // to remove all
// const mySessionData =JSON.parse(sessionStorage.getItem("mySessionStore"));//previously it is a string but when we get as a object then we use "JSON.parse()"
// console.log(mySessionData); // here we store as a string but than we can retrieve it and it can turn back into the array or the object that we needed.

// localStorage stores the data it usually helps when we close and reopen a web site after some time


localStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const key = localStorage.key(0); // first key in local storage
const storeLink = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(key);
console.log(storeLink);