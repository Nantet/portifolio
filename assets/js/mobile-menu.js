const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

menuOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
});
