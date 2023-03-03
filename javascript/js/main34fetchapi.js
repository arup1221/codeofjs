// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending
// console.log(users);

const myUsers = {
    userList: []
}
const myCoolFunction = async()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}
const anotherFunc = async() => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

// myCoolFunction();
anotherFunc();
console.log(myUsers.userList);

// const users =fetch("https://jsonplaceholder.typicode.com/users")
// .then(response =>{
//     return response.json();
// })
// .then(data =>{
//     data.forEach(user=>{
//         console.log(user);
//     })
// });