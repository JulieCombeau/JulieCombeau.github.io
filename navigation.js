function showNav() {
  const navbar = document.querySelector(".navbar");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show-nav");
  });
}

showNav();

function removeNav() {
  const links = document.getElementsByClassName(".links");
  const navbar = document.querySelector(".navbar__ul");
  navbar.addEventListener("click", (e) => {
    navbar.classList.remove("show-nav");
    console.log(e);
  });
}
removeNav();
