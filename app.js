// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! You ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost. ${compChoice} beats you ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //scissors, paper
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //rock, scissors
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.id;
//     playGame(userChoice);
//   });
// });
const userScoreElem = document.getElementById("user-score");
const compScoreElem = document.getElementById("comp-score");
const msgElem = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

choices.forEach(choice => choice.addEventListener("click", playGame));

function playGame(e) {
    const userChoice = e.target.alt.toUpperCase();
    const compChoice = getCompChoice();
    const winner = determineWinner(userChoice, compChoice);
    updateScores(winner);
    displayResult(userChoice, compChoice, winner);
}

function getCompChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) return "DRAW";
    if (
        (userChoice === "ROCK" && compChoice === "SCISSORS") ||
        (userChoice === "PAPER" && compChoice === "ROCK") ||
        (userChoice === "SCISSORS" && compChoice === "PAPER")
    ) {
        return "USER";
    } else {
        return "COMP";
    }
}

function updateScores(winner) {
    if (winner === "USER") {
        userScore++;
        userScoreElem.textContent = userScore;
    } else if (winner === "COMP") {
        compScore++;
        compScoreElem.textContent = compScore;
    }
}

function displayResult(userChoice, compChoice, winner) {
    if (winner === "DRAW") {
        msgElem.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (winner === "USER") {
        msgElem.textContent = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
        msgElem.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
    }
}
