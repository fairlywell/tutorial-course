let number = 123456.789;

//number = number.toLocaleString("vi-VN");

number1 = number.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND"
});
number2 = number.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});
number3 = number.toLocaleString("zh-CN", {
  style: "currency",
  currency: "CNY"
});
console.log(number1);
console.log(number2);
console.log(number3);