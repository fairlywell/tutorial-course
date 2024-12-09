// static dinh nghia thuoc tinh va phuong thuc thuoc ve lop class


class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return radius * this.PI * 2;
  }

  static getArea(radius) {
    return radius * radius * this.PI;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
  static userCount = 0;

 constructor(username) {
  this.username = username;
  User.userCount++;
 } 

 static getUserCount() {
  console.log(`There are ${User.userCount} users online`);
 }
 sayHello() {
  console.log(`Hello, my username is ${this.username}`);
 }
}

const user1 = new User ("Spongebob");
const user2 = new User ("Patrick");
const user3 = new User ("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
User.getUserCount();

user1.sayHello();
user2.sayHello();
user3.sayHello();