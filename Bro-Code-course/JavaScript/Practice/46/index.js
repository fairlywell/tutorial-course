let a = 1;
let b = 2;
// gan gia tri a cho b gan gia tri b cho a
[a, b] = [b, a];
console.log(a);
console.log(b);

const colors = [
  "red",
  "green",
  "blue",
  "white",
  "black"
];
// gan index 0 cho 4, 4 cho 0
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

const [firstColors, secondColors, thirdColors, ...extraColors] = colors;
console.log(firstColors);
console.log(secondColors);
console.log(thirdColors);
console.log(extraColors);

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 33,
}
// dat gia tri mac dinh cua job la Unemployed
const {firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ham displayPerson nhap 4 gia tri dau vao va hien thi cac gia tri do
function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}
// goi ham de hien thi
displayPerson(person1);