/* css/style.css */
html {
  scroll-behavior: smooth;
}

/* reveal effect initial state */
[data-reveal] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-in-out;
}

/* classes toggled by JS */
.opacity-100 {
  opacity: 1 !important;
}

.translate-y-0 {
  transform: translateY(0) !important;
}

body {
  transition: all 0.3s ease-in-out;
}