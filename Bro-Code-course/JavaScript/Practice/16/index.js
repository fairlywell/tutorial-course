//    brOcOdE to Brocode

let userName = window.prompt("Enter your username");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();

// userName = letter + extraChars;


userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
console.log(userName);