let fruits = [
  "apple",
  "orange",
  "yanana"
];

// fruits[3] = "coconut";
// fruits.push("cococnut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");
// console.log(index);
// console.log(numOfFruits)


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

for (let i = 0; i< fruits.length; i++) {
  console.log(fruits[i]);
}
// di lui
for (let i = fruits.length -1; i>= 0; i--) {
  console.log(fruits[i]);
}
//shortcut
for (let fruit of fruits) {
  console.log(fruit);
}
//sort theo bang chu cai revertse dao nguoc
fruits.sort().reverse();
for (let fruit of fruits) {
  console.log(fruit);
}
