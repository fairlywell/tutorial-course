let userName = "       Bro Code     ";
let phoneNumber = "123-456-7890";

// length do dai cua string
console.log(userName.length);
// character at (index)
console.log(userName.charAt(0));
// index of first character "o"
console.log(userName.indexOf("o"));
// index of last character "o"
console.log(userName.lastIndexOf("o"));
// loai bo khoang trang dau va cuoi
console.log(userName.trim(userName));
//ghi hoa toan bo
userName = userName.toUpperCase(userName);
console.log(userName);

// ghi thuong toan gbo
userName = userName.toLowerCase(userName);
console.log(userName);
// lap lai 3 lan
userName = userName.repeat(3);
console.log(userName);
//loai bo khoang trang o dau
let result = userName.startsWith(" ");
console.log(result);
// loai bo khoang trang cuoi
let result1 = userName.endsWith(" ");
console.log(result1);
// loai bo neu bao gom khoang trang
let result2 = userName.includes(" ");
console.log(result2);
// loai bo - chuyen thanh khoang trang
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);
// tang do dai len 15 va thay the bat dau bang 0
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);
// tang do dai len 15 va thay the ket thuc bang 0
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);
