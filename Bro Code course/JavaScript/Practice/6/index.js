const PI = 3.14;

// PI = 3;2
let radius;
let circumference;

// radius = window.prompt('Nhap ban kinh hinh tron');
circumference = 2 * PI * radius;
// console.log(circumference);

document.getElementById("mySubmit").onclick = () => {
  
  radius = document.getElementById("myInput").value;

  // radius = window.prompt('Nhap ban kinh hinh tron');
  radius = Number(radius);
  circumference = 2 * PI * radius;
 
  
  document.getElementById("myH3").textContent = circumference + "cm";
}