const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");
// khai bao bien de su dung

myButton.addEventListener("click", event => {
  //them addeventlistenr cho phan tu button voi click

  if(myImg.style.visibility === "hidden") { // neu thuoc tinh visility cua anh dang hidden 
    myImg.style.visibility = "visible"; // doi thanh visible
    myButton.textContent = "Hide"; // doi noi dung thanh Hide
  } else {
    myImg.style.visibility = "hidden"; // neu anh dang an 
    myButton.textContent = "Show";
  }


});