// first game
let playgame = confirm("Shall we play rock, paper or scissors?");
if(playgame){
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock"||playerOne === "paper"||playerOne === "scissors"){

           let computerChoice = Math.floor(Math.random() *3 +1); 
           let computer = computerChoice === 1 ?"rock"
           : computerChoice === 2 ?"paper"
           :"scissors";
           
           //condition
           let result = 
                    playerOne === computer
                    ? "Tie Game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\n Computer wins!`
                    :playerOne === "paper" && computer === "Scissors"
                    ? `playerOne: ${playerOne}\ncomputer:${computer}\n Computer wins!`
                    :playerOne === "Scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\ncomputer: ${computer}\n Computer wins!`
                    :`playerOne: ${playerOne}\ncomputer: ${computer}\n player wins!`;
            alert(result);
            let playAgain = confirm("Play Again");
            playAgain ? location.reload() : alert("Ok, thanks for playing");

        }
        else{
            alert("Invalid Input");
        }
        

    }
    else{
        alert("I guess you changed your mind, May be next time");
    }
}
else{
    alert("Ok may be next time");
}