function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function colorHandler(event) {
  const colorPicker = getRandomHexColor();
  bodyEl.style.backgroundColor = colorPicker;
  spanEl.textContent = colorPicker;
}

buttonEl.addEventListener("click", colorHandler);
