document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 70) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});

const scrollToTop = () => window.scrollTo({top:0, behavior:'smooth'});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.pest').forEach(item => {
  observer.observe(item);
});