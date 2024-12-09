const choices = ["rock", "paper", "scissors"]; // mang chua lua chon 

// cac phan tu html khai bao bang id
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// bien dem diem 
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {// ham lua chon cua nguoi choi
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // chon ngau nhien tu mang choices
  let result = "";// bien luu ket qua 

  if(playerChoice === computerChoice) {
    result = "IT'S A TIE!"; // lua chon giong nhau thi hoa
  } else {
    // switch de kiem tra tung truong hop
    switch(playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
    }
  }

  // hien thi lua chon
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  // lua bo lop greenText va redText neu co truoc do
  resultDisplay.classList.remove("greenText", "redText");

  switch(result) { // dua vao ket qua
    case "YOU WIN!":
      resultDisplay.classList.add("greenText"); // them mau
      playerScore++; // tang diem
      playerScoreDisplay.textContent = playerScore;// cap nhat hien thi sau khi tang
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}