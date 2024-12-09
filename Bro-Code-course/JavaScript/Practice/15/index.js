const fullName = "Bro Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);

const email = "Bro1@gmail.com";

let firstEmail = email.slice(0, email.indexOf("@"));
console.log(firstEmail);

let lastEmail = email.slice(email.indexOf("@") + 1);
console.log(lastEmail);
