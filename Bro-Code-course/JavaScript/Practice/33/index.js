const numbers = [1, 2, 3, 4, 5];
// map nhan callback va tra ve 1 mang moi
const squares = numbers.map(square);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

const students = [
  "Spongebob",
  "Patrick",
  "Squidward",
  "San"
];

const studentsUpper = students.map(upperCase);
//callback
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
function upperCase(element) {
  // tra ve ket qua viet hoa
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}

console.log(studentsLower);
// tao mang chua format
const dates = [
  "2024-1-12",
  "2025-1-14",
  "2026-1-16"
];
// tao datesFormatted bang map(callbakc)
const datesFormatted = dates.map(formatDates);

function formatDates(element) {
  // tao parts tach nhau bang -
  const parts = element.split("-");
  // tra ve ket qua voi dinh dang phan tu cuoi len dau phan giua giu nguyen phan tu dau len cuoi
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
// hien thi datesFormatted sau gan dates.map(formatDates)
console.log(datesFormatted);