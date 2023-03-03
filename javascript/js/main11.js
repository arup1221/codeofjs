let playerOne = "paper";
let computer = "rock";
let result = 
    playerOne === computer
    ?"tie game!"
    :playerOne === "rock" && computer === "paper"
    ? "computer wins"
    : playerOne === "paper" && computer === "scissors"
    ?"computer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins"
    :"playerOne wins"
console.log (result);