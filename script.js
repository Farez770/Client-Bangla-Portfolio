const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  console.log("click hoice");
});

// Scroll Animation

const cards = document.querySelectorAll(
  ".skill-card, .about-left,.edu-card, .project-card, .problem-card, .contact-card, .achievement-item",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});

// ---------------------------------
