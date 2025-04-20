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