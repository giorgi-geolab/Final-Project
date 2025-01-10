"use strict";

const enteredPass = document.getElementById("entered-pass");
const firstEye = document.getElementById("first-eye");
const secondTryPass = document.getElementById("secondTry-pass");
const secondEye = document.getElementById("second-eye");
const submitButton = document.getElementById("submit");

const inputs = document.querySelectorAll("#form input");

function togglePassView(input, icon) {
  const type = input.type === "password" ? "text" : "password";
  input.type = type;

  if (type === "text") {
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

firstEye.addEventListener("click", () => {
  togglePassView(enteredPass, firstEye);
});

secondEye.addEventListener("click", () => {
  togglePassView(secondTryPass, secondEye);
});

function myFunction() {
  secondTryPass.style.setProperty("color", "");
}

submitButton.addEventListener("click", () => {
  let checked = true;
  inputs.forEach((input) => {
    if (
      input.value === "" ||
      input.value === null ||
      input.value === undefined
    ) {
      checked = false;
    }
  });
  if (enteredPass.value !== secondTryPass.value) {
    alert("The passwords do not match.");
    event.preventDefault();
    secondTryPass.style.borderBottom = "0.14rem solid #cf2129";
    secondTryPass.focus();
    secondTryPass.style.color = "#cf2129";
    checked = false;
  } else if (checked) {
    alert("You have successfully registered.");
  }
});
