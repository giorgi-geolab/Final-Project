"use strict";

const pass = document.getElementById("pass");
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  const type = pass.type === "password" ? "text" : "password";
  pass.type = type;

  if (type === "text") {
    eye.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    eye.classList.replace("fa-eye", "fa-eye-slash");
  }
});
