class Person {

  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
// lop Address long trong lop Person
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

const person2 = new Person("Patrick", 34, "126 Conch St.",
  "Bikini Bottom",
  "Int Waters"
)

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);