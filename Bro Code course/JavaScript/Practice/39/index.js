const person1 = {
  name: "Spongebob",
  favFood: "hambergers",
  sayHello: function() {console.log(`Hi i am ${this.name}`)}, // this thay the cho person1 linh dong hon
  // ko dung () => {} vi scope
  eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function() {console.log(`HI im ${this.name}`)},
  eat: function () {console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();