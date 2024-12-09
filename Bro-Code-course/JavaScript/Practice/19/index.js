
let userName;
let passWord;

let loggedIn = false;

while (!loggedIn) {
  userName = window.prompt("Enter your username");
  passWord = window.prompt("Enter your password");

  if(userName === "myUsername" && passWord === "myPassword") {
    loggedIn = true;
    console.log("You are log in!");
    
  } else {
    console.log('Wrong try again!');
  }
}