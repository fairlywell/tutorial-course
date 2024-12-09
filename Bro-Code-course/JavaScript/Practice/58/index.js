// gan display de hien thi ket qua
const display = document.getElementById("display");
// bien luu tru intervall de co the dung
let timer = null;
let startTime = 0;// thoi diem bat dau cua bo dem thoi gian
let elapsedTime = 0; // thoi gian da troi qua
let isRunning = false; // xem trang thai co dang chay ko

function start() {// ham bat dau dem tg
  if(!isRunning) { // neu chua chayj !isRunning true tuc la isRunning false
    startTime = Date.now() - elapsedTime; // ghi nhan tg bat dau bang lay tg hien tai - tg da troi qua
    timer = setInterval(update, 10); // goi ham update moi 10 mili s de cap nhat tgian
    isRunning = true; // dat trang thai running thanh true
  }
}

function stop() {
  if(isRunning) { // neu dang chay
    clearInterval(timer); // dung cap nhat thoi gian bang cach xoa interval(timer)
    elapsedTime = Date.now() - startTime; // luu tgian da troi qua bang tgian hien tai - tgian bat dau
    isRunning = false; // dat trang thai thanh false
  }
}

function reset() {
  clearInterval(timer);// reset cung xoa viec cap nhat tgian xoa interval
  startTime = 0; // thoi gian bat dau = 0
  elapsedTime = 0; // thoi gian da troi qua = 0 am chi viec reset
  isRunning = false; // ko chay nua
  display.textContent = "00:00:00:00"; // cap nhat gia tri mac dinh thanh 00
}


function update() {

  const currentTime = Date.now(); // lay thoi gian hien tai
  elapsedTime = currentTime - startTime; // thoi gian da troi qua bang thoi gian hien tai - thoi gian bat dau

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));  // Tính số giờ từ mili giây
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);  // Tính số phút (lấy phần dư của giờ)
  let seconds = Math.floor((elapsedTime / 1000) % 60);  // Tính số giây (lấy phần dư của phút)
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);  // Tính mili giây (chia cho 10 để lấy 2 chữ số)

  //dam bao co 2 chu so
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}