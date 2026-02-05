// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealSections = () => {
  const trigger = window.innerHeight - 100;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top < trigger) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections();

// Footer year
document.querySelector("footer p").textContent =
  `© ${new Date().getFullYear()} Thabang Rakhetsi. All rights reserved.`;