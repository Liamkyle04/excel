// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = menuButton?.querySelector('.menu-icon');
const closeIcon = menuButton?.querySelector('.close-icon');

menuButton?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
  menuIcon?.classList.toggle('hidden');
  closeIcon?.classList.toggle('hidden');
});

// Set current year in footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear().toString();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});