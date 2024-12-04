// NUMBER GUESS GAME

const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1) + 1);

let attempts = 0;
let guess;
let running = true;

while(running = true) {

  guess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
  guess = Number(guess);

  if(isNaN(guess)) {
    window.alert('Please enter the valid number');
  } else if(guess < minNumber || guess > maxNumber) {
    window.alert('Please enter the valid number');
  } else {
    attempts++;
    if(guess < answer) {
      window.alert(`TOO LOW`);
    } else if (guess > answer) {
      window.alert(`TOO HIGH`);
    } else {
      window.alert(`Correct. Answer is ${answer}. U took ${attempts} try`);
      break;
    }
  }
}