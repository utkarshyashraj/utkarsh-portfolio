document.getElementById("year").textContent = String(new Date().getFullYear());

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealEls.forEach((el) => observer.observe(el));

// Show above-the-fold reveals immediately
requestAnimationFrame(() => {
  document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("visible"));
});
