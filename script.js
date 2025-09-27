// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 15, 35, 0.98)";
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
  }
});

// Add some interactive hover effects
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.1)";
  });

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
