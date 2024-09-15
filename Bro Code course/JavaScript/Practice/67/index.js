const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event) {

}

myButton.addEventListener("click", event => {
  myBox.style.backgroundColor = "tomato"; // event.target la phan tu da duoc click
  // tro toi phan tu myBox thay thi event.target
  myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it 😯";
});

myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me 😀";
})