const fruits = [
  {name: "apple", color: "red", calories: 95},
  {name: "orange", color: "orange", calories: 45},
  {name: "banana", color: "yellow", calories: 105},
  {name: "coconut", color: "white", calories: 159},
  {name: "pineapple", color: "yellow", calories: 37}
];

// them vao vi tri cuoi mang
//fruits.push({name: "grapes", color: "purple", calories: 95}) 

// xoa phan tu o vi tri cuoi
// fruits.pop();

// tach phan tu o vi tri 1 va 2 di
// fruits.splice(1, 2);

//console.log(fruits[5].name);

// lap tu ket qua cua fruit.name trong fruits
// fruits.forEach(fruit => console.log(fruit.name));

// console.log(fruits);

// map(condition) tao mang moi chua dieu kien cua no
// const fruitNames = fruits.map(fruit => fruit.name);

// console.log(fruitNames);

// loc voi filter(condition) voi dieu kien cua no tra ve 1 mang
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

const lowCalFruits = fruits.filter(fruit => 
  fruit.calories < 100
);

const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce(condition) tra ve 1 gia tri max va min cua no voi dieu kien
const maxFruit = fruits.reduce((max, fruit) =>
                                // neu fruit.calories > max.calories thi thay the bang fruit ko thi thay bang max
                                // if fruit.calories > max.calories {
                                // return fruit
                                // } else {
                                // return max}
                                fruit.calories > max.calories ?
                                fruit : max
);

const minFruit = fruits.reduce((min, fruit) => 
  // neu fruit calo nho hon min calo thi frut calo la nho hon va tra ve fruit 
  // duyet min tiep theo xem co nho hon ko 
  // neu ko thi tra ve min
                                fruit.calories < min.calories ?
                                fruit : min
);

console.log(maxFruit);
console.log(minFruit);