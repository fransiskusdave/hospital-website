// Mobile Navbar
const mobileNav = document.getElementById("navbar"),
  navCloseBtn = document.getElementById("nav-close-btn"),
  navCloseBtnIcon = document.getElementById("nav-close-btn-icon");

const navOpenedClass = "left-0",
  navClosedClass = "-left-[300px]",
  closeClass = "ri-close-line",
  menuClass = "ri-menu-4-line";

navCloseBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);
    navCloseBtnIcon.classList.remove(menuClass);
    navCloseBtnIcon.classList.add(closeClass);
  } else {
    mobileNav.classList.remove(navOpenedClass);
    mobileNav.classList.add(navClosedClass);
    navCloseBtnIcon.classList.remove(closeClass);
    navCloseBtnIcon.classList.add(menuClass);
  }
});
