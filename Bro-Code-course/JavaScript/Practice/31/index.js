// callback la ham chuyen tham so den ham khac

hello(wait);
goodbye();

function hello(callback) {
  console.log("hello");
  callback();
}

function wait() {
  console.log("wait");
  
}

function goodbye() {
  console.log("Goodbye");
  
}

sum(displayPage, 1, 2);
//
function sum(callback, x, y) {
  let result = x + y ;
  // tinh result moi goi lai ham de theo thu tu
  callback(result);
}

function displayPage(result) {
  console.log(result);
  document.getElementById("myH1").textContent = result;
}

// document.getElementById("myH1").textContent = sum(displayPage,1, 2);

