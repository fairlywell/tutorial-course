// spread operator =  ... allows an iterable such as an
//                  array or string to be expanded
//                  into separate elements
//                  (unpacks the elements)
// spread lam viec voi mang va chuoi

// ------------- EXAMPLE 1 -------------
let numbers = [1, 2, 3, 4, 5];
// mo rong mang thanh cac phan tu rieng le tuong duong voi 1, 2, 3, 4, 5
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

// ------------- EXAMPLE 2 -------------
let username = "Bro Code";
// mo rong chuoi thanh b r o c o d e
let letters = [...username]; 

console.log(letters);

// ------------- EXAMPLE 3 -------------
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
// mo rong cac phan tu roi ket hop thanh foods va egg va milk
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);