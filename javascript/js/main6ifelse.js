let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if(customerIsBanned){
    reply = "no soup for you!";
}
else if(soup && crackers){
    reply = `here is your ordered ${soup} & crackers`;
}
else if(soup){
    reply = `here your order of ${soup}`;
}
else{
    reply = "Sorry we don't have soup";
}
console.log(reply);
// alert(reply);