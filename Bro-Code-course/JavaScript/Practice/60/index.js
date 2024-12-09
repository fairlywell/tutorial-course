
function func1(callback) {// ham func1 nhan ham callback lam tham so
  setTimeout( () => {// dung setTimeout tri hoan ma trong 2 giay
    console.log("task1");// in ra task1 sau 2 giay
    callback()},// goi ham callback sau khi task1 duoc in
     2000);
  
}

function func2(){// tao ham func2
  console.log("task2");
  console.log("task3");
  console.log("task4");
}
// goi ham func1 voi func2 la callback
// nen func1 xong truoc moi den func2
func1(func2);
