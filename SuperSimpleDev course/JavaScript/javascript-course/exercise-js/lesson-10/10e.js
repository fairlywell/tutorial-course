function toggledButton(selector) {
  const button = document.querySelector(selector);

if (!button.classList.contains('is-toggled')) {
  // trước khi bật nút ktra xem có nút bật chưa và tắt đi
  
  const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }

  button.classList.add('is-toggled');
} else {
  button.classList.remove('is-toggled');
}
}
/*
function turnofPreviousButton () {
  
}
*/