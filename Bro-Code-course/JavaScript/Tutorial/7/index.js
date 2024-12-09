const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");

const countLabel = document.getElementById("countLabel");

let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
countLabel.textContent = count; // Hiển thị giá trị khi tải trang

increaseButton.onclick = () => {
  count++;
  countLabel.textContent = count;
  localStorage.setItem('count', count); // Lưu count vào localStorage
}

resetButton.onclick = () => {
  countLabel.textContent = 0;
  localStorage.setItem('count', count); // Lưu count vào localStorage
}

decreaseButton.onclick = () => {
  count--;
  countLabel.textContent = count;
  localStorage.setItem('count', count); // Lưu count vào localStorage
}