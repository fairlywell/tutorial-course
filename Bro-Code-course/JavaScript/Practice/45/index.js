class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // thiet lap newWidth moi
  set width(newWidth) {
    
    if(newWidth > 0) {
      //this.private _
      this._width = newWidth;
    } else {
      console.error("Width must be a posititve number");
    }
  }
  set height(newHeight) {
    if(newHeight > 0) {
      this._height = newHeight;
    } else {
    console.error("Height must be a positive number");
    }
  }

  // goi lai gia tri sau khi thiet lap bang set
  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(2, 4);

// rectangle.width = 5;
// rectangle.height = 3;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
  //khoi tao ham 3 tham so
  constructor(firstName, lastName, age) {
    // gan tham so
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //thiet lap firstName
  set firstName(newFirstName) {
    if(typeof newFirstName === "string" && newFirstName.length > 0) {
      // gan cho newFirstName
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if(typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a positive number");
    }
  }
  
  get firstName() {
    // goi private firstname
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person1 = new Person("Spongebob", "Squarepants", 30);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);