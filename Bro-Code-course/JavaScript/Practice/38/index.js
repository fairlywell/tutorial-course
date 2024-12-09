const person1 = {
  firstName: "Sponge",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function() {console.log("Hello iam sponrebob")}
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 42,
  isEmployed: false,
  sayHello: () => {console.log("Hello im Patrick")},
  eat: () => {console.log("iam eating pizaa")}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();