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
  view.classList.toggle("purple") ; 
  view.classList.toggle("darkblue");  
},false);
div.addEventListener("click",(event) => {
    div.classList.toggle("blue") ; // to toggle the div as previous of view
    div.classList.toggle("black");  
},false);
h2.addEventListener("click",(event) => {

   const myText = event.target.textContent;
   myText === "My 2nd View"
   ?(event.target.textContent = "Clicked")
   :(event.target.textContent = "My 2nd View"); /// now everythings toggles
},false);

const nav = document.querySelector("nav");
nav.addEventListener("mouseover", (event)=>{
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout", (event)=>{
    event.target.classList.remove("height100");
    //if point using  mouse then it comes 100 px when take out then back to normal
});
};
