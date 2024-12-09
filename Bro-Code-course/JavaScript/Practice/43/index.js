// ke thua giup dung lai code
// inheritance reuse code

class Animal{
  alive = true;

  eat() { 
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }

}
// Rabbit extends (thua ke) tu Animal
class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}
// gan bien rabbit de hien thi thuoc tinh tu lop Rabbit
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
rabbit.swim();