const iconHamburger = document.getElementById("iconHamburger");
const nav = document.querySelector(".header-navbar");
const mediaQuery = window.matchMedia("(min-width: 768px)");

iconHamburger.addEventListener("click", () => {
  iconHamburger.classList.toggle("rotateImage");
  nav.classList.toggle("show");
});

function handleMediaQuery(event) {
  if (event.matches) {
    iconHamburger.classList.remove("rotateImage");
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
}

mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery);