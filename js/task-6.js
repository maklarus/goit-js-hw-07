function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function destroyBoxes() {
  const elementsToRemove = document.querySelectorAll(".box");
  elementsToRemove.forEach((element) => {
    element.remove();
  });
}

function createBoxes(amount) {
  destroyBoxes();
  amount = inputNumber.value;

  if (amount >= 1 && amount <= 100) {
    let divSize = 30;

    for (let i = 0; i < amount; i++) {
      divBoxes.insertAdjacentHTML(
        "beforeend",
        `<div style="background-color: ${getRandomHexColor()}; width: ${divSize}px; height: ${divSize}px" class="box"></div>`
      );
      divSize += 10;
    }
  }
  inputNumber.value = "";
}

buttonDestroy.addEventListener("click", destroyBoxes);
buttonCreate.addEventListener("click", createBoxes);
