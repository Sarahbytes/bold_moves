const menuButton = document.querySelector('.header-menu-btn');
const navMenu = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav-item');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('header-nav--active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('header-nav--active');
  });
});
