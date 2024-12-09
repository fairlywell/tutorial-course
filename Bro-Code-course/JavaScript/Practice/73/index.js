// chon tat ca anh trong class slides gan bang slides
const slides = document.querySelectorAll(".slides img");


// khoi tao chi so cua slide hien tai la 0
let slideIndex = 0;
// luu tru khoang thoi gian cua Id 
let intervalId = null;

// initializeSlider();
// khi DOM duoc tai xong goi ham de khoi tao slider
document.addEventListener("DOMContentLoaded", initializeSlider);

// ham tao slider
function initializeSlider() {

  //neu co it nhat 1 anh trong danh sach
  if(slides.length > 0) {
    // them class de hien thi slide dau tien
    slides[slideIndex].classList.add("displaySlide");
    // khoang thoi gian 5 de tu dong chuyen slide
    intervalId = setInterval(nextSlide, 5000);
  }

}
// ham hien thi slide theo chi so
function showSlide(index) {

  // neu chi so vuot qua so luong slide quay lai slide dau tien
  if(index >= slides.length) {
     slideIndex = 0;
  // neu chi so nho hon 0 quay lai slide cuoi de tao lap
  } else if(index < 0) {
    slideIndex = slides.length - 1;
  }

  // bo class displaySlide de slide an
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  // them class displaySlide cho slide hien tai de hien thi
  slides[slideIndex].classList.add("displaySlide");
}
// chuyen slide truoc
function prevSlide() {
  // dung viec tu dong chuyen slide bang xoa thoi gian khoang thoi gian luu tru
  clearInterval(intervalId);
  // giam chi so
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}