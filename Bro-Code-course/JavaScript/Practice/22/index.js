function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(21));

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail(`Bro@gmail.com`));