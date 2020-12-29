let playerScore = 0;
let computerScore = 0;

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = computerPlay();
  let winner = playRound(playerChoice, computerChoice);

  const playerScoreText = document.querySelector("#my-score");
  const computerScoreText = document.querySelector("#computer-score");

  switch (winner) {
    case "player":
      playerScore += 1;
      playerScoreText.textContent = playerScore;
      break;
    case "computer":
      computerScore += 1;
      computerScoreText.textContent = computerScore;
      break;
    default:
      break;
  }
  if (checkWinner(playerScore, computerScore)) {
    const bodyText = document.querySelector("#main");
    bodyText.classList.add("disabled");

    const playAgainButton = document.querySelector("#play-again");
    playAgainButton.classList.remove("disappear");
  }
}

const selections = document.querySelectorAll("input");
selections.forEach((selection) => {
  selection.addEventListener("click", playGame);
});

const playAgain = document.querySelector("#play-again");
playAgain.addEventListener("click", restartGame);

function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "Something has gone terribly wrong";
  }
}

function playRound(playerChoice, computerChoice) {
  const resultText = document.querySelector("#result");
  if (playerChoice == computerChoice) {
    result.textContent = "Tie!";
    return "tie";
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    result.textContent =
      "You Lose! " +
      computerChoice.substring(0, 1).toUpperCase() +
      computerChoice.substring(1).toLowerCase() +
      " beats " +
      playerChoice.substring(0, 1).toUpperCase() +
      playerChoice.substring(1).toLowerCase();
    return "computer";
  } else {
    result.textContent =
      "You Win! " +
      playerChoice.substring(0, 1).toUpperCase() +
      playerChoice.substring(1).toLowerCase() +
      " beats " +
      computerChoice.substring(0, 1).toUpperCase() +
      computerChoice.substring(1).toLowerCase();
    return "player";
  }
}

function checkWinner(playerScore, computerScore) {
  if (playerScore == 3) {
    result.textContent = "You Won the Game! Congrats!";
    return true;
  } else if (computerScore == 3) {
    result.textContent = "Computer Wins the Game! Sucks 2 Suck!";
    return true;
  }
  return false;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreText = document.querySelector("#my-score");
  const computerScoreText = document.querySelector("#computer-score");
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;

  const bodyText = document.querySelector("#main");
  bodyText.classList.remove("disabled");

  const playAgainButton = document.querySelector("#play-again");
  playAgainButton.classList.add("disappear");

  const resultText = document.querySelector("#result");
  resultText.textContent = "";
}
