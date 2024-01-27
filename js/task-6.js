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
  divBoxes.innerHTML = "";
}

function createBoxes(amount) {
  destroyBoxes();

  if (amount >= 1 && amount <= 100) {
    let divSize = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${divSize}px`;
      div.style.height = `${divSize}px`;
      divBoxes.appendChild(div);

      divSize += 10;
    }
  }
  inputNumber.value = "";
}

buttonDestroy.addEventListener("click", destroyBoxes);
buttonCreate.addEventListener("click", () =>
  createBoxes(Number(inputNumber.value))
);
