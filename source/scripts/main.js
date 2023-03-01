const iconHamburger = document.querySelector("#iconHamburger");
const nav = document.querySelector(".header-navbar");

iconHamburger.addEventListener("click", () => {
  iconHamburger.classList.toggle("rotateImage");
});

function toggle() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
