// Welcome Screen Handler
window.addEventListener('load', () => {
  document.body.classList.add('no-scroll');
  
  setTimeout(() => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }, 4000);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle class active untuk mobile menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger menu di klik
hamburger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Close mobile menu when clicking nav link
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('active');
  });
});

// Smooth scroll untuk semua anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animasi scroll reveal untuk elemen
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
