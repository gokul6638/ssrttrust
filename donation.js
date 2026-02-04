// Animate on scroll effect
document.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Form submission simulation
document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Redirecting to secure payment page...");
});
