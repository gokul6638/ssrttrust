// Booking alerts
function bookDarshan() { alert("Darshan booking: Coming soon!"); }
function bookAccommodation() { alert("Accommodation booking: Coming soon!"); }
function donate() { alert("Donation module: Coming soon!"); }

// Scroll animation effect
document.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
