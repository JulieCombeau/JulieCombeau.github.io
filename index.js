const pres = document.querySelector(".presentation");
const orga = document.querySelector(".organisation");
const metho = document.querySelector(".methodology");
const prob = document.querySelector(".problematics");
const fun = document.querySelector(".fun");
const foot = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200 && window.scrollY < 1500) {
    pres.classList.add("scrollX");
  } else {
    pres.classList.remove("scrollX");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1200 && window.scrollY < 2500) {
    orga.classList.add("scrollX");
  } else {
    orga.classList.remove("scrollX");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 1800 && window.scrollY < 3000) {
    metho.classList.add("scrollX");
  } else {
    metho.classList.remove("scrollX");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 2300 && window.scrollY < 3500) {
    prob.classList.add("scrollX");
  } else {
    prob.classList.remove("scrollX");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 3200 && window.scrollY < 4500) {
    fun.classList.add("scrollX");
  } else {
    fun.classList.remove("scrollX");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 4000) {
    foot.classList.add("scrollX");
  } else {
    foot.classList.remove("scrollX");
  }
});
