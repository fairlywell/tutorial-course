const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// document.body.append(newH1); // ham them vao cuoi child

// document.body.prepend(newH1); // ham them vao dau parent

// document.getElementById("box1").append(newH1); // tro toi id box1 dung append dua newH1 vao trong box1 ko phai ben ngoai

// document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box2"); // gan box2 co id la box2 la box2
// document.body.insertBefore(newH1, box2) // chen newH1 truoc box2 trong phan tu body dung insertBefore()

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// document.getElementById("box1").removeChild(newH1); // tro toi id cu the k phai body roi remove lop con chua tham so no


const newListItem = document.createElement("li");// tao element

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const apple = document.getElementById("apple"); // tro apple toi id cua no
// document.getElementById("fruits").insertBefore(newListItem, apple); // cho newListItem vao truoc apple dung insertBefore

const listItems = document.querySelectorAll("#fruits li"); // tro tat ca phan tu li nam trong id fruits gan vao listItems
document.getElementById("fruits").insertBefore(newListItem, listItems[0]); // trong id fruits chen newListItem truoc listItems index la 0

document.getElementById("fruits").removeChild(newListItem); // remove newListItem khoi fruits