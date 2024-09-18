function walkDog() { // walkDog(callback)

    return new Promise((resolve, reject) => { // tao mot Promise
      setTimeout(() => {
  
        const dogwalked = true; // gia dinh la chua
  
        if(dogwalked) {
          resolve("You walk the dog 🐕"); // if true da duoc giai queyt
        } else {
          reject("You DIDN'T walk the dog"); // tu choi
        }
  
  
        //callback;
      }, 1500);
    });
  }
  
  function cleanKitchen() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        const kitchenCleaned = true;
        
        if(kitchenCleaned) {
          resolve("You clean the kitchen 🧹");
        } else {
          reject("You DIDN't clean the kitchen");
        }
  
  
  
      }, 2500);
    });
  }
  
  function takeOutTrash() {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  
        const trashTakenOut = false;
  
        if(trashTakenOut) {
          resolve("You take out the trash 🔁");
        } else {
          reject("You DIDN'T take out the trash");
        }
  
  
  
      }, 500);
    });
  }
  
  // Thực thi các công việc theo chuỗi với .then() và .catch()
  
  walkDog()
    .then(value => {
      console.log(value); // In ra kết quả của walkDog nếu thành công
      return cleanKitchen(); // Sau khi đi dạo chó xong, tiếp tục dọn bếp
    })
    .then(value => {
      console.log(value); // In ra kết quả của cleanKitchen nếu thành công
      return takeOutTrash(); // Sau khi dọn bếp xong, tiếp tục đổ rác
    })
    .then(value => {
      console.log(value); // In ra kết quả của takeOutTrash nếu thành công
      console.log("You finished all the chores!"); // Thông báo hoàn thành tất cả công việc
    })
    .catch(error => {
      console.error(error); // Nếu có lỗi xảy ra trong bất kỳ Promise nào, in ra lỗi
    });
  
  // walkDog(() => {
  //   cleanKitchen(() => {
  //     takeOutTrash(() => console.log("You finished all the chores"));
  //   });
  // });