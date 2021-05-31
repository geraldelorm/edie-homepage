const mobileNav = document.querySelector('.mobile-nav');
const humbegger = document.querySelector('.humbegger');

humbegger.addEventListener('click', navToggle);
mobileNav.addEventListener('click', navToggle);

function navToggle() {
  mobileNav.classList.toggle('opened');
  humbegger.classList.toggle('opened');
}
