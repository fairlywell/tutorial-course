//Dice roll
function rollDice() {
  // khoi tao lay gia tri value tu input
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  for(let i = 0 ; i < numOfDice; i++) {
    //lap tu so nhap vao
    const value = Math.floor(Math.random() * 6) + 1;
    // them value vao hang cuoi values
    values.push(value);
    // them anh vao mang images
    images.push(`<img src="dice_images/Dice-${value}.svg.png" alt="Dice-${values}">`);
  }
  // hien thi ket qua dung join gop ket qua tung xac
  diceResult.textContent = `You roll to ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}