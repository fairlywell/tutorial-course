// console.log(navigator.cookieEnabled);
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

// console.log(document.cookie);

// setCookie("email", "Sponge@gmail.com", 365);

// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

// console.log(document.cookie);

// setCookie("firstName", "Spongebob", 365);
// setCookie("lastName", "SquarePants", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#submitButton");
const cookieButton = document.querySelector("#cookieButton");

submitButton.addEventListener("click", () => {// khi an vao submit thi luu vao cookie 
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);

})

cookieButton.addEventListener("click", () => {
  // khi nhan nut cookieButton thi hien thi gia tri tu cookie 
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");

})

function setCookie(name, value, daysToLive) {
  // thiet lap cookie
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name} = ${value}; ${expires}; path=/`
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

// duyet qua mang de tim cookie
  cArray.forEach(element => {
    if(element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result;
  // console.log(cArray);  
}