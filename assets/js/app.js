window.onscroll = function () {
  navbarStick();
};
function navbarStick() {
  const navbar = document.getElementById("navbar");
  const navbarTopPos = navbar.offsetTop;
  window.scrollY >= navbarTopPos
    ? navbar.classList.add("stick-top")
    : navbar.classList.remove("stick-top");
}
