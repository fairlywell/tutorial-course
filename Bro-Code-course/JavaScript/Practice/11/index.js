const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPalButton = document.getElementById("payPalButton");
const myButton = document.getElementById("myButton");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

myButton.onclick = () => {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }

  if (visaButton.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardButton.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (payPalButton.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select the payment type`;
  }

}