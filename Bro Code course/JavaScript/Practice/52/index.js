function outer() {
  // khai bao message trong pham vi ham outer()
   let message = "hello";

  // khai bao ham inner ben tron ham outer
   function inner() {
    // co the truy cap message do cung pham vi ham outer
    console.log(message);
   }

   //goi ham inner sau khi khai bao
   inner();

}

// message = "goodbye";

// goi ham outer in ra ket qua console.log(message);
outer();


function createCounter() {

  let count = 0;
  // khai bao biet tang trong ham tong
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }
  // ham getCount tra ve gia tri hien tai cua count
  function getCount() {
    return count;
  }

  // tra ve 1 object chua 2 ham tang va getCount
  return {increment, getCount};
}

const counter = createCounter();
// goi ham tong va tra ve 2 phuong thuc tang va getCount
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// tao ham tong
function createGame() {
    let score = 0;

  // ham tang them points vao score
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  // tra ve gia tri hien tai cua score
  function getScore() {
    return score;
  }

  // tra ve object chua 3 phuong thuc
  // truy cap bien score nho closure
  return {increaseScore, decreaseScore, getScore};
}

// goi ham creatGame tra ve doi tuong chua 3 phuong thuc
// gan cho bien game de su dung ben ngoai ham tong
const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);