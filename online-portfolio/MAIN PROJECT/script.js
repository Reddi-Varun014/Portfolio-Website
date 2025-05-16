// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Toggle navigation menu for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Dark Mode Toggle
  const darkModeBtn = document.getElementById('darkModeToggle');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Change icon accordingly
      if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️';  // sun icon for light mode
      } else {
        darkModeBtn.textContent = '🌙';  // moon icon for dark mode
      }
    });
  }

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Contact form validation (if on contact page)
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Simple validation example
      const email = contactForm.querySelector('input[name="email"]');
      if (email && !email.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        email.focus();
      }
    });
  }
});
