// first game
const initGame = () => {
    const startGame = confirm("shall we play rock, paper or scissor?");
    startGame ? playGame() : alert ("Ok, maybe next time.")
};

//game flow function
const playGame =()=>{
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decideNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }
        else{
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors");
};
const formatPlayerChoice = (playerChoice)=>{
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }else{
        return false;
    }
};

const decideNotToPlay = () =>{
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) =>{
    if(
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors" 
    ) {
    return playerChoice;
}else{
    return false;
}
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper and scissors.");
};

const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() *3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
    player === computer
                    ? "Tie Game!"
                    : player === "rock" && computer === "paper"
                    ? `player: ${player}\ncomputer: ${computer}\n Computer wins!`
                    :player === "paper" && computer === "Scissors"
                    ? `player: ${player}\ncomputer:${computer}\n Computer wins!`
                    :player === "Scissors" && computer === "rock"
                    ? `player: ${player}\ncomputer: ${computer}\n Computer wins!`
                    :`player: ${player}\ncomputer: ${computer}\n player wins!`;

    return winner;
};

const displayResult = (result)=> {
    alert(result);
};

const askToPlayAgain = (result)=> {
    return confirm("Play Again?");
};

const thanksForPlaying =() =>
{
    alert("Ok, thanks for playing.");
};

initGame();





