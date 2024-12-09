// const timeoutId = setTimeout( () => 
//   window.alert("Hello"), 3000
// );

// clearTimeout(timeoutId);

let timeoutId; // Khai báo một biến toàn cục để lưu ID của timeout.

function startTimer() {
  // startTimer là một hàm để bắt đầu quá trình hẹn giờ.
  //setTimeout(callback, delay);
  timeoutId = setTimeout(
    () => window.alert("Hello"), // Sau 3000ms (3 giây), sẽ xuất hiện thông báo "Hello" trên màn hình.
    3000 // Khoảng thời gian 3000ms (3 giây).
  );
  
  console.log("starter"); // In ra console chữ "starter" để báo rằng hẹn giờ đã được khởi động.
}

function clearTimer() {
  // clearTimer là một hàm để hủy hẹn giờ đã đặt.
  
  clearTimeout(timeoutId); // clearTimeout hủy bỏ timeout đã được lưu trữ trong `timeoutId`.
  
  console.log("cleared"); // In ra console chữ "cleared" để báo rằng timeout đã bị hủy.
}
