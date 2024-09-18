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

  async function doChores() {


    try {

    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
    }
    catch(error) {
        console.error(error);
    }
  }

  doChores()