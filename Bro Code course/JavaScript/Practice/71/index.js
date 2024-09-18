// const myButton = document.getElementById("myButton");

// const myH1 = document.getElementById("myH1");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.classList.add("hover");

// myButton.addEventListener("mouseover", event => {
//   event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => {
//   event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseover", event => {
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//   event.target.classList.toggle("hover");
// });

// myH1.classList.add("enabled");

// myButton.classList.add("enabled");

// myH1.addEventListener("click", event => {
//   if(event.target.classList.contains("disabled")) {
//     myH1.textContent += "😡";

//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
  
// });

// myButton.addEventListener("click", event => {

//   if(event.target.classList.contains("disabled")) {
//     myButton.textContent += "😡";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }


// });

let buttons = document.querySelectorAll(".myButtons");
// gan buttons bang phan tu co lop la myButtons
buttons.forEach(button => {
  // lap tung phan tu va them class enabled cho cac nut
  button.classList.add("enabled");
});

buttons.forEach(buttons => {
  buttons.addEventListener("mouseover", event => {
    // them mouseover dung addEventListenr cho all nut
    event.target.classList.toggle("hover");
    //khi chuot di vao nut bat tat class hover 
    // dung toggle dung de them hoac xoa hover
  });
});

buttons.forEach(buttons => {
  buttons.addEventListener("mouseout", event => {
    // tuong tu voi khi roi chuot di ra voi mouseout
    event.target.classList.toggle("hover");
  });
});

buttons.forEach(buttons => {
  buttons.addEventListener("click", event => {

// neu nut dang co class disabled thi them emoji 
    if(event.target.classList.contains("disabled")) {
      event.target.textContent += "🤬";
    } else {
      // chua co class disabled thay the enabled bang lop disabled do
      event.target.classList.replace("enabled", "disabled");
    }

    // event.target.classList.replace("enabled", "disabled");
  });
});

