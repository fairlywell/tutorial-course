let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);


let numbers = [1, 10, 2, 3, 4, 7, 6, 5, 9];
// dung call back  (a, b) => a - b voi dieu kien neu a - b  falsy thi a dung truoc b a - b ko phai 0
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 13, gpa: 2.5},
                {name: "Aqua", age: 22, gpa: 1.5},
                {name: "Haewk", age: 40, gpa: 4.0}
];

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// people.sort((a, b) => a.gpa- b.gpa);

// so sanh theo bang chu cai su dung built-in localeCompare a.name so voi b.name
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);