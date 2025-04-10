document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});