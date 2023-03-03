// // callbacks
// function firstFunction(parameter,callbacks){
//     //do stuff
//     callbacks();
// }

// //AKA "callback hell"
// firstFunction(para,function() {
//     //do stuff
//     secondFunction(para,function(){
//         thirdFunction(para, function(){

//         });
//     });
// });
//////////////////////////////////////////////////////////////
//promises

// 3 states: pending, fulfilled, rejected
const myPromise = new Promise((resolve,reject)=>{
    const error = false;
    if(!error){
        resolve("Yes! resolve the promise!");
    }else{
        reject("No! rejected the promise");
    }
});

//console.log(myPromise);
// myPromise.then(value=>{
//     console.log(value);
// })

// myPromise
// .then(value=>{
//     return value + 1;
// })
// .then(newValue=>{
//     console.log(newValue);
// })
// .catch(err=>{
//     console.error(err);
// })
//////////////////////////////////////////////////////////////


const myNextPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("myNextPromise resolve!");
    }, 3000); // 3000 means 3 sec
});

myNextPromise.then(value=>{
    console.log(value); // myNextPromise function waits 3 sec
});
myPromise.then(value =>{
    console.log(value);
});

