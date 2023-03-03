let playerOne = "sci";
let computer = "paper";

switch(playerOne){
    case computer:
        console.log("Tie game!");
        break;

    case "rock":
        if(computer ==="paper"){
            console.log("computer wins!");
        }
        else{
            console.log("PlayerOne wins!");
        } 
        break;
    case "paper":
        if(computer ==="scissors"){
            console.log("computer wins!");
        }
        else{
            console.log("PlayerOne wins!");
        } 
        break;
    default:
        if(computer ==="rock"){
            console.log("computer wins!");
        }
        else{
            console.log("PlayerOne wins!");
        }
}