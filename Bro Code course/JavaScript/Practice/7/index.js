const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseButton.onclick = () => {
  count--;
  countLabel.textContent = count;
}

resetButton.onclick = () => {
  count = 0;
  countLabel.textContent = count;
}

increaseButton.onclick = () => {
  count++;
  countLabel.textContent = count;
}