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
document.querySelectorAll('dl > *').forEach(item => {
  observer.observe(item);
});

const contactDoc = () => {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `tel:+14805286357`;
  } else {
    const recipient = "octavio.pen21@gmail.com";
    const subject = "Customer Inquiry from Your Website";
    const body = "Hello,\n\nI’d like to get in touch regarding your services.";
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

