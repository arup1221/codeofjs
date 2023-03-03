//2nd parameter of Fetch is a object



//  const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/",{
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//             // Accept: "text/plain"
//         }
//     });
//     const jsonJokeData = await response.json();
//     // const jsonJokeData = await response.text();
//     // console.log(jsonJokeData.joke);
//     console.log(jsonJokeData);
// }

// getDadJoke();

// to post a data

// const jokeObject = {
//     id: 'ljqzkVKJtrc', 
//     joke: 'How do you get two whales in a car? Start in England and drive West.'
// }

// const postData = async(jokeObj) => {
//     const response = await fetch("https://httpbin.org/post",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.headers);
// }
// postData(jokeObject);


/// request a Joke




const requestJoke = async (firstName, lastName)=> {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value.joke);
}
requestJoke("Bruce","Lee");

// site is not working so check video async await for "abstract into function"

