// ham task1 nhan 1 callback thuc thi sau 2 giay
function task1(callback) {
  setTimeout(() => {
    console.log("Task1");
    callback(); // goi callback
  }, 2000);
}

function task2(callback) {
  setTimeout( () => {
    console.log("task2");
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout( () => {
    console.log("Task3");
    callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("task4");
    callback();
  }, 1500);
}

function task5(callback) {
  setTimeout( () => {
    console.log("task5");
    callback();
  }, 2000);
}


// thuc hien task theo thu tu 
// su dung callback de dam bao task truoc hoan thanh truoc khi task sau bat dau
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {console.log("All tasks complete")});
      });
    });
  });
});