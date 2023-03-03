document.addEventListener("readystatechange",(event)=> {
    if(event.target.readyState === "complete"){
        console.log("Ready State : COMPLETE");  // if the page load complete then it shows "Ready State : COMPLETE"
        initApp(); // it used to load the other doms
    }
});

const initApp= ()=> {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault(); // to stop the -- flash out the "submit event"
        console.log("submit event");
    });
};