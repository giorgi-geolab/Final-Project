"use strict";

const burger = document.querySelector(".burger-menu-div");
const navLinks = document.getElementById("nav-links-ul");
const menuIcon = document.querySelector(".fa-bars");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});
