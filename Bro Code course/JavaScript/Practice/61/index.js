// try { // try khoi lenh muon thuc thi
//   console.log(x);
// }

// catch(error) { // bat loi cua try neu co
//   console.error(error);
// }
// finally {
//   console.log("this is always executes luon duoc thuc thi");
// }

// console.log("You have reached the end!");

try { // nhan gia tri tu nguoi dung nhap vao chuyen thanh so
  const dividend = Number(window.prompt("enter a dividend"));
  const divisor = Number(window.prompt("enter a divisor"));


  if(divisor == 0 ) {// neu nhap 0 thi tra ve loi
    throw new Error("You cant divide by zero");
    // throw new Error: Dùng để ném ra một lỗi khi điều kiện không hợp lệ, chẳng hạn như chia cho 0 hoặc nhập không phải là số.
  }

  if(isNaN(dividend) || isNaN(divisor)) { // neu NaN thi tra ve loi dung throw new Error
    throw new Error("Value must be a number");
  }

  // ko van de gi thi thuc hien chia in ket qua result
  const result = dividend / divisor;
  console.log(result);
}

catch(error) {// xu ly loi va in ra no
  console.error(error);
}

console.log("You have reached the end!22")