console.dir(document);

document.title = "HIs";
document.body.style.backgroundColor = "aqua";

const username = ""; // khai bao username
const message = document.getElementById("message");// message gan bang id messag tu html

message.textContent +=  username !== "" ? username : `Guest`; 
// neu username rong thi gan la Guess ko thi hien thi ten username !!