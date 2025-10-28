// === Mobile Menu Toggle ===
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// === Scroll Reveal (Efek muncul saat discroll) ===
const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("opacity-100", "translate-y-0");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// === Dark Mode Toggle ===
const darkToggle = document.getElementById('dark-toggle');
const html = document.documentElement;

if (localStorage.theme === 'dark') {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.theme = 'dark';
      darkToggle.textContent = '☀️';
    } else {
      localStorage.theme = 'light';
      darkToggle.textContent = '🌙';
    }
  });

  // Set ikon awal sesuai mode
  if (html.classList.contains('dark')) {
    darkToggle.textContent = '☀️';
  } else {
    darkToggle.textContent = '🌙';
  }
}
