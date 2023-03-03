// const view = document.querySelector("#view2");
// // console.log(view);
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

//syntax: addEventListener(event,function,useCapture)   third useCapture is optional it default is false

// const doSomething = () => {
//     alert("doing something");
// };

// h2.addEventListener("click", doSomething,false);  // click and it showing doing something

// h2.removeEventListener("click",doSomething, false);  // for removing event listener

// h2.addEventListener("click",function(event){ //(event)you can use it or function(event) then "=>" removed
//     console.log(event.target); /// function inside the event listener and when we click It gives the target element
//     event.target.textContent = "Click Here"; // add text element so The 2nd view >>>>(changes to when click) "Click Here"
// });



// safer to working with DOM -----> Ready state changed event

document.addEventListener("readystatechange",(event)=> {
    if(event.target.readyState === "complete"){
        console.log("Ready State : COMPLETE");  // if the page load complete then it shows "Ready State : COMPLETE"
        initApp(); // it used to load the other doms
    }
});

const initApp= ()=> {
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// event Bubbling
view.addEventListener("click",(event) => {
    //event.stopPropagation(); //  basically stop the propagation  --- background ii sudhu purple hobe ages process ta jemon ke temon ii thakbe // if the useCaptcha is true then it stop next propagation and if false then it stops the previous propagation
    // event.target.style.backgroundColor = "red"; 
  view.classList.toggle("purple") ; // click add and click remove purple and darkblue classes
  view.classList.toggle("darkblue");  
},true);
div.addEventListener("click",(event) => {
    
    // div.style.backgroundColor = "blue"; 
    event.target.style.backgroundColor = "blue"; 
},true);
h2.addEventListener("click",(event) => {
    event.target.textContent = "Clicked"; //event.target just targeted element
},true);
};
//Explanation:  I just clicked the h2 it is inside the div so the event bubbles up and triggers the click event for the div as well so the div changed to a background color of blue and the div is inside the view that a section element with the id view and so the event bubbled up once again and it trigger the click event listener for the view and it changed it to purple so the event bubbled up that is default so the event capture was false in default it goes upward bcz we had the h2 inside the div it went from one to the next to the next  but when it is true then it works outermost element and works its way inward
 
