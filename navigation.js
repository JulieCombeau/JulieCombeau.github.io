function showNav() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });
}
showNav();

function removeNav() {
  const navbar = document.querySelector(".navbar");
  const navbar_ul = document.querySelector("ul.navbar__ul");
  navbar_ul.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });
}
removeNav();
