class Product{
  // tao cac object 
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
  calculatorTotal(salesTax) {
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);

product1.displayProduct();

const total = product1.calculatorTotal(salesTax);
console.log(`Total (with Tax) is ${total.toFixed(2)}`);