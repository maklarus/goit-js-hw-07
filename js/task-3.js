const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const inputHandler = (event) => {
  if (refs.input.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = refs.input.value.trim();
  }
};

refs.input.addEventListener("input", inputHandler);
