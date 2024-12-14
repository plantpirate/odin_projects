"use strict";
console.log("hello jobin");

function getComputerChoice() {
  const choicesArr = ["rock", "paper", "scissors"];
  let computerChoice;

  do {
    computerChoice = choicesArr[Math.floor(Math.random() * 3)];
  } while (computerChoice === getComputerChoice.previousChoice);

  getComputerChoice.previousChoice = computerChoice;
  return computerChoice;
}

function playGame() {
  const roundResults = document.querySelector(".round-results span");
  const gameResults = document.querySelector(".game-results span");
  const humanSpan = document.querySelector(".human-choice span");
  const computerSpan = document.querySelector(".computer-choice span");
  const humanScoreText = document.querySelector(".human_score span");
  const computerScoreText = document.querySelector(".computer_score span");
  const buttons = document.querySelectorAll(".button");

  const updateUI = function (humanChoice, computerChoice) {
    humanSpan.innerText = `${humanChoice}`;
    computerSpan.innerText = `${computerChoice}`;
    humanScoreText.innerText = `${humanScore}`;
    computerScoreText.innerText = `${computerScore}`;
  };

  const restartBtn = document.querySelector(".restart");
  restartBtn.addEventListener("click", function () {
    resetScores();
    clearChoicesText();
    roundResults.innerText = gameResults.innerText = "";
    humanScoreText.innerText = computerScoreText.innerText = "";
    gameEnded = false;
  });

  const clearChoicesText = function () {
    humanSpan.innerText = computerSpan.innerText = "";
  };
  const resetScores = function () {
    humanScore = computerScore = 0;
  };

  const endGame = function () {
    clearChoicesText();
    resetScores();
    gameEnded = true;
  };
  const displayFinalResults = function () {
    if (humanScore === 5) {
      gameResults.innerText = "You won the game";
      endGame();
    } else if (computerScore === 5) {
      gameResults.innerText = "You lost the game";
      endGame();
    }
  };
  let humanScore = 0;
  let computerScore = 0;
  let gameEnded = false;

  function getHumanChoice() {
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        if (!gameEnded) {
          gameResults.innerText = "";
          const humanChoice = btn.id;
          const computerChoice = getComputerChoice();
          playRound(humanChoice, computerChoice);
        }
      });
    });
  }

  getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundResults.innerText = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      roundResults.innerText = "You lose! Paper beats rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      roundResults.innerText = "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      roundResults.innerText = "You lose! Scissors beats paper!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      roundResults.innerText = "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      roundResults.innerText = "You lose! Rock beats scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      roundResults.innerText = "You win! Scissors beats paper!";
    }
    updateUI(humanChoice, computerChoice);

    displayFinalResults();
  }
}
playGame();
