function toogleNav() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  const bar = document.querySelector(".bar");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
    navbar.classList.toggle("hide-bar");
  });
}
toogleNav();
