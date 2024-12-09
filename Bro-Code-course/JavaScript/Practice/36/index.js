// setTimeout(function() {
//   console.log("hello");
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
// map de tao 1 mang moi
// callback chinh ham function luon roi return ket qua
const squares = numbers.map(function(element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function(element) {
  return Math.pow(element, 3);
});
console.log(squares);
console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

const evenNums = numbers.filter(function(element) {
  return element % 2 === 0;
});

console.log(evenNums);

const oddNums = numbers.filter(function(element) {
  return element % 2 !== 0;
});

console.log(oddNums);

const total = numbers.reduce(function(acculamator, element) {
  return acculamator + element;
});

console.log(total);