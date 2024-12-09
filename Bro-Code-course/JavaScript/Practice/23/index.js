let x = 3;

function function1() {
  // x = 2;
  console.log(x);
}

function function2() {
  x =1;
  console.log(x);
  
}
function1();
function2();
// local scope inside function 
// another function cant access local scope
// global scope around all of code
// local >> global