//selections
const body = document.querySelector(".body");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const openAccount = document.querySelector(".btn-show--modal");
const hiddenForm = document.querySelector(".hidden");
const hiddenClose = document.querySelector(".hidden__close");
const headertitle = document.querySelector(".header__title");
const hidden = document.querySelector(".hidden");
const section1 = document.querySelector(".section--1");
const learnMore = document.querySelector(".learnMore");
console.log(hiddenClose);
//functions
const openForm = function () {
  main.style.opacity = 0;
  hiddenForm.style.opacity = 100;
};
const closeForm = function () {
  // hidden.style.opacity = 0;
  // main.style.opacity = 100;
  console.log("hi");
};

//Events
openAccount.addEventListener("click", openForm);
hiddenClose.addEventListener("mousehover", closeForm);
learnMore.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: "smooth" });
});
