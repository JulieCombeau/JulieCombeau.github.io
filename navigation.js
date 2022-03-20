const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

const navbarLinks = document.querySelector(".links");
navbarLinks.addEventListener("click", () => {
  navbar.classList.remove("show-nav");
  navbar.classList.add("hide-nav");
  navbar.classList.remove("hide-nav");
});
