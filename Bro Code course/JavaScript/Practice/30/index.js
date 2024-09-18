function generatePassword (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  // ham nhan 5 tham so

  // chuoi chua tap hop cac ky mau
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  // khoi tao chuoi ky tu va pass
  let allowedChars = "";
  let password = "";

  // kiem tra tung bien boolen neu true them chuoi ky tu vao allowedChars
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // length <= 0 ko hop le
  if(length <= 0) {
    return `(password length must be at least 1)`;
  }
  // it nhat phai chon 1 loai Chars
  if (allowedChars.length === 0) {
    return `At least 1 set of character needs to be selected`;
  }

  // vong lap de tao mat khau
  // tao so ngau nhien tu 0 den do dai ky tu cho phep
  
  for( let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    // them ky tu vao mat khau tuong ung
    password += allowedChars[randomIndex];
  }
  // tra ve mat khau
  return password;
}
// dieu kien goi ham
const passwordLength = 6;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = false;
// goi ham gom cac tham so voi dieu kien phia tren
const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Genarated password: ${password}`);