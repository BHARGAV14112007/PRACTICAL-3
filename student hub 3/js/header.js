// header.js – mobile hamburger toggle
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'nav-toggle';
  toggleBtn.setAttribute('aria-label', 'Menu');
  toggleBtn.innerHTML = '\u2630'; // hamburger icon
  toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.prepend(toggleBtn);
  }
});
