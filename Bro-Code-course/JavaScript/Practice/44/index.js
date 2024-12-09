// super duoc dung trong lo pde goi ham
// this = this object
// super = the parent

class Animal {
// khoi tao ham chua name age cua lop cha
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
// nhap speed la tham so
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
  showAge(age) {
    console.log(`The ${this.name} is ${this.age} years old`);
  }
}
// lop Rabiit ke thua tu lop Animal
class Rabbit extends Animal {
  // khoi tao ham chua 3 tham so cua Rabiit
  constructor(name, age, runSpeed) {
    // dung super ke thua name va age tu lop cha Animal
    super(name, age);
    // khai bao runSpeed 
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    // goi phuong thuc move cua lop cha nen dung tu khoa super truoc no
    super.move(this.runSpeed);
  }
  
}

class Fish extends Animal {
  constructor (name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`The ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

// const rabbit = new Rabbit("Tho", 3, 25);
// rabbit.run();
// rabbit.showAge();

// const fish = new Fish("Ca", 5, 30);
// fish.swim();
// fish.showAge();

// khai bao bien hawk chua gia tri ten tuoi toc do 
const hawk = new Hawk("Dai Bang", 10, 80);
// goi ham
hawk.fly();
hawk.showAge();