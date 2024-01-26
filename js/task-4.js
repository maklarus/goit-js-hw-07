const loginForm = document.querySelector(".login-form");

const loginFormHandler = (event) => {
  event.preventDefault();

  const email = loginForm.elements["email"].value.trim();
  const password = loginForm.elements["password"].value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formValues = {
      email,
      password,
    };
    console.log(formValues);
  }

  loginForm.reset();
};

loginForm.addEventListener("submit", loginFormHandler);
