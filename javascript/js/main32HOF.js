// Higher Order function

// A higher order function is a function that does at least one of the flowing
// ** Takes one or more functions as an argument(parameter)
// ** Returns a function as the result

//forEach()  ---- import export must be in a module 
import { posts } from "./posts.js";

posts.forEach((post)=> {
    console.log(post);  // here we only get posts in inspect
});
console.clear();

const filterPosts = posts.filter((post)=>{
    return post.userId === 1;  // for user id 5
});
console.log(filterPosts);  // only shows the user ID ones

const mappedPosts = filterPosts.map((post)=>{
    return post.id * 10; // 41* 10 == 410 this way it comes
});
console.log(mappedPosts); 


const reducePostsValues = mappedPosts.reduce((sum,post) =>{
    return sum + post; // posts + sum = 4550 if user Id 5
});
console.log(reducePostsValues);