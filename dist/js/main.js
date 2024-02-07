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

// Swipper
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// FAQ Show Answer
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector(".faq__btn");

  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";
    const iconElement = faqBtn.querySelector("i");
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  // reset: true // reset animations
});

sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__img");

sr.reveal(".statistics__item", {
  origin: "top",
  distance: "100px",
  interval: 100,
  delay: 600,
});

sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
  delay: 600,
});

sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

sr.reveal(".testimonials");
sr.reveal(".testimonials__container");

sr.reveal(".team__title");
sr.reveal(".team__slider");

sr.reveal(".faq__title");
sr.reveal(".faq__item", {
  origin: "bottom",
  distance: "100px",
  interval: 100,
  delay: 600,
});

sr.reveal(".departments__bg");
sr.reveal(".departments__container");

sr.reveal(".blog__title");
sr.reveal(".blog__post", {
  origin: "bottom",
  delay: 600,
  interval: 100,
  distance: "100px",
});

sr.reveal(".brand__title");
sr.reveal(".brand__logo", {
  origin: "bottom",
  delay: 600,
  interval: 100,
  distance: "100px",
});

sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

sr.reveal(".footer__item", {
  origin: "bottom",
  delay: 600,
  interval: 100,
  distance: "100px",
});
