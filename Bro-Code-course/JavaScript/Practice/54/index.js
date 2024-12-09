// console.time("test");

// for(let i = 0; i < 1000000000; i++) {
//   //do some code here
// }

// console.timeEnd("test");

function loadData() {

  console.time("loadData");
  for(let i = 0; i < 1000000000; i++){
    //pretend to load some date
  }
  console.timeEnd("loadData");
}

function processData() {
  console.time("processData");
  for(let i = 0; i< 10000000; i++) {
    //
  }
  console.timeEnd("processData");
}
processData();
loadData();