function toogleNav() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  const navbarLinks = document.querySelector(".navbar__links");
  const bar = document.querySelector(".bar");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
    // bar.classList.toggle("bar__anim");
    navbarLinks.addEventListener("click", () => {
      navbar.classList.remove("show-nav");
    });
  });
}
toogleNav();
