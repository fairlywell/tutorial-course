let buttons = document.querySelectorAll(".myButton");

// console.log(buttons);

// buttons.forEach(button => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😁";
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor = "hsl(204, 100%, 40%)";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor = "hsl(204, 100%, 50%)";
//   });
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButton";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButton");

// console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click",
    event => {
      event.target.remove();
      console.log(buttons);
      buttons = document.querySelectorAll(".myButton");
    }
  );
});