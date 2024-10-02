// Get the current URL
const currentLocation = window.location.href;

// Get all nav links
const navLinks = document.querySelectorAll('.navbar .nav-link');

navLinks.forEach(link => {
  // Check if the link's href matches the current URL
  if (link.href === currentLocation) {
    link.classList.add('active'); // Add active class to the current link
  }
});
