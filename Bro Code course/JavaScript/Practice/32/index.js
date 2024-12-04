// [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
// [apple, orange, banana, coconut] -> [Apple, Orange, Banana, Coconut]
//callback
//tao mang numbers
let numbers = [1, 2, 3, 4, 5];
//goi ham
numbers.forEach(pow);
numbers.forEach(display);
// khoi tao ham element la phan tu hien tai trong mang
// index la vi tri cua phan tu
// array la mang chua phan tu do
function pow(element, index, array) {
  // tung phan tu mu 2 va cap nhat vi tri hien tai index
  array[index] = Math.pow(element, 2);
}

// ham display de hien thi phan tu tham so element la phan tu hien tai
function display(element) {
  console.log(element);
}
// khoi tao mang
let fruits = ["apple", "orange", "banana", "coconut"];
// goi ham
fruits.forEach(capitalize);
fruits.forEach(display);
// tham so cua ham element la phan tu hien tai
// tham so index la vi tri
// tham so array la mang chua phan tu
function capitalize(element, index, array) {
  //cap nhat phan tu trong mang
  // viet hoa chu cai dau dung charAt(0) + phan tu con lai
  array[index] = element.charAt(0).toUpperCase() + element.slice();
}
// khoi tao ham hien thi
function display(element) {
  console.log(element);
}
