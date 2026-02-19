let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
let divs = document.querySelector("body");
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
divs.before(newBtn);