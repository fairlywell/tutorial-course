function openFridge(...foods) {
  console.log(...foods);
}
function getFood(...foods) {
  return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
// tra ve tung mon an theo thu tu ko phai dang mang sau khi da gop
openFridge(food1, food2,food3);
//tra ve 1 mang chua cac doi so truyen vao
const foods = getFood(food1, food2);
console.log(foods);


function sum(...numbers) {
  let result = 0;
  for(let number of numbers) {
    result += number;
  }
  return result;
}
// nhan danh sach cac so numbers lap qua tung numbers va tinh sum
const total1 = sum(1, 2);

console.log(`Total is ${total1}`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
// lap qua tung phan tu duoc dua vao tinh trung binh
const total = getAverage(4, 3, 5, 6);
console.log(total);

function combineString(...strings) {
  // dung join de gop voi dau cach lam phan cach
  return strings.join(" ");
}

const fullName = combineString("Mr", "Bro", "Code");

console.log(fullName);