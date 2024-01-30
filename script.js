//selections
//basic selections
const body = document.querySelector(".body");
const main = document.querySelector(".main");
//nav selections
const nav = document.querySelector(".nav");
const learnMore = document.querySelector(".learnMore");
const features = document.querySelector(".nav__features");
const eServices = document.querySelector(".nav__e-service");
const aboutUs = document.querySelector(".nav__aboutus");
//open account selections
const openAccount = document.querySelector(".btn-show--modal");
const hiddenForm = document.querySelector(".hidden");
const hiddenClose = document.querySelector(".hidden__close");
const hidden = document.querySelector(".hidden");
//header title selections
const headertitle = document.querySelector(".header__title");
//section--1[features]
const section1 = document.querySelector(".section--1");

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
const handleFeatures = function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
};

//Events
openAccount.addEventListener("click", openForm);
hiddenClose.addEventListener("mousehover", closeForm);
learnMore.addEventListener("click", handleFeatures);
features.addEventListener("click", handleFeatures);

//scrolling part(image-load)
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
};
const imgObsever = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
imgTargets.forEach((img) => imgObsever.observe(img));


