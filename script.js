//selections
const body = document.querySelector(".body");
const nav = document.querySelector(".nav");
const openAccount = document.querySelector(".btn-show--modal");
const hiddenForm = document.querySelector(".hidden");
const hiddenClose = document.querySelector(".hidden__close");
const headertitle = document.querySelector(".header__title");
const main = document.querySelector(".main");

console.log(hiddenClose);
//functions
const openForm = function () {
  main.style.opacity = 0;
  hiddenForm.style.opacity = 100;
};
const closeForm = function () {
  hidden.style.opacity = 0;
  main.style.opacity = 100;
};

//Events
openAccount.addEventListener("click", openForm);
hiddenClose.addEventListener("click", closeForm);
