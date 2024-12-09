function updateClock() {
  // tao bien now de lay thoi gian hien tai nho ham Date()
  const now = new Date();

  // lay gio hien tai gan vao hours
  let hours = now.getHours();

  // xac dinh PM neu hours tren 12
  const maridiem = hours > 12 ? "PM" : "AM";
  // chuyen thanh chuoi va dung padStart de dam bao co it nhat 2 ky tu sau khi them AM PM
  hours = hours.toString().padStart(2, "0");

  // tuong tu voi hours
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  // gan timeString = gio hien tai da lay duoc
  const timeString = `${hours}:${minutes}:${second} ${maridiem}`;
  // hien thi o id clock = gia tri timeString o tren
  document.getElementById("clock").textContent = timeString;
}

// goi ham vua tao
updateClock();
// thiet lap de ham goi moi 1s mot lan
setInterval(updateClock, 1000);