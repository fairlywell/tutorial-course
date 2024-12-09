// Shortcut if else
// condition ? codeIfTrue : codeIfFalse;

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
