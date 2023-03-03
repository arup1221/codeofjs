//DOM = Document Object Model
const view1 = document.getElementById("view1"); //to select view or view1
console.log(view1);
const view2 = document.querySelector("#view2");  // another way to select
console.log(view2);
view1.style.display = "flex"; //if both is flex then you can scroll down
view2.style.display = "flex";   // flex only view2 full in page

const views = document.getElementsByClassName("view");
console.log(views); // we get a html collection which is like an array but not an array
const sameviews = document.querySelectorAll('.view'); // here we can use class just like css and here we can add all
console.log(sameviews); // here we get a nodelist


const divs = view1.querySelectorAll("div");
console.log(divs);  // get node list of 12 divs
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); // get html collection

const evenDiv = view1.querySelectorAll("div:nth-of-type(2n)");
const threeDiv = view1.querySelectorAll("div:nth-of-type(3n)");
console.log(evenDiv); //select the even divs(divs which are divisible by 2)

for(let i = 0;i< evenDiv.length;i++){
    evenDiv[i].style.backgroundColor = "darkblue"; // even divs gonna be in darkblue color
    // evenDiv[i].style.width ="200px";
    // evenDiv[i].style.height ="200px";
    
}

const navText = document.querySelector("nav h1");
console.log(navText);  // here we select the H!
navText.textContent = "Hello!";// here we change the My page ----> Hello (h1 content change)
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;
console.log(navbar);
navbar.style.justifyContent = "flex-between"; // flex-start and flex-end can use for everything in left and right -- flex-between put between //// flex-evenly

console.log(evenDiv[0]);
console.log(evenDiv[0].parentElement);
console.log(evenDiv[0].parentElement.children); // in this way you can define the DOM tree
console.log(evenDiv[0].parentElement.childNodes); // double than the children
console.log(evenDiv[0].parentElement.hasChildNodes());
console.log(evenDiv[0].parentElement.lastChild);
console.log(evenDiv[0].parentElement.lastElementChild);
console.log(evenDiv[0].parentElement.firstChild);
console.log(evenDiv[0].parentElement.firstElementChild);
console.log(evenDiv[0].nextSibling);
console.log(evenDiv[0].nextElementSibling);
console.log(evenDiv[0].previousSibling);
console.log(evenDiv[0].previousElementSibling);
console.log(evenDiv[0].nextElementSibling.nextElementSibling); 
// get different ans and you can use dot notation to chain of all 
//  but don't try to make  it complecated



view1.style.display = "flex";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


while(view2.lastChild){
    view2.lastChild.remove(); // here we remove all the nodes which is a section element  so "my 2nd view" is deleted or gone
}

// creating a function for making a div
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
// createDivs(view2,12);  // to create just 1 div
for(let i = 1; i <= 12;i++){
    createDivs(view2,i);
} // here we create All 12 divs using for loop


/*The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, with each node representing an element or a piece of text. JavaScript can be used to manipulate the DOM, allowing developers to dynamically change the content, structure, and style of a web page. The DOM is standardized by the World Wide Web Consortium (W3C) and is supported by all major web browsers.*/