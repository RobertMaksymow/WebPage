console.log("JavaScript connected");

const terminalTyping = document.querySelector("#name");
const nameString = "Robert Maksymøw";

const cursor = document.querySelector("#cursor");

let timer;
let i = 0;
let str1 = "";

function typeText() {
  if (i >= nameString.length) {
    clearInterval(timer);
  } else {
    str1 = str1 + nameString[i];
    i++;
    terminalTyping.innerText = str1;
  }
}

setInterval(typeText, 100);

let timer2;

function changeColor() {
  if (!timer2) {
    timer2 = setInterval(flashText, 300);
  }
}

function flashText() {
  cursor.className = cursor.className === "blink-on" ? "blink-off" : "blink-on";
}

changeColor();
