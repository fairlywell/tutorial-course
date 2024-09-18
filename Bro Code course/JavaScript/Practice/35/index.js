const prices = [5.004, 30.03, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`total is ${total.toFixed(2)}`);
// return lau pre la 5 next la 30 cong vao thay the
// pre la 35 next la 10
// pre la 45 next la 25
function sum(previous, next) {
  return previous + next;
}
// accumulator dung de luu gia tri sau moi lan lap

const grades = [75, 50, 90, 80, 65, 95];


const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator ,element) {
  // dung Math.max de duyet phan tu max
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element)
}