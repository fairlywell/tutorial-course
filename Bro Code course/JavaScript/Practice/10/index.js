const inputElement = document.getElementById("inputElement");
const submitButton = document.getElementById("submitButton");
const resultElement = document.getElementById("resultElement");
let age;

submitButton.onclick = () => {
  age = inputElement.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = 'You TOO OLD to enter this site';
  } else if (age == 0) {
    resultElement.textContent = "You were just born can't enter this site";
  } else if (age < 0) {
    resultElement.textContent = `Your age can't below 0`;
  } else if (age >= 18) {
    resultElement.textContent = `You can enter this site`;
  } else{
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
}