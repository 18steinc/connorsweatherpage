// navbar.js

// Check if the navbar is cached in session storage
if (!sessionStorage.getItem("navbar")) {
  // If not cached, fetch it and store it
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      sessionStorage.setItem("navbar", data); // Cache navbar
      document.getElementById("navbar").innerHTML = data;
      loadBootstrapAndActivateLinks(); // Load Bootstrap and set active links
    })
    .catch(error => console.error("Error loading navigation bar:", error));
} else {
  // Use the cached navbar if available
  document.getElementById("navbar").innerHTML = sessionStorage.getItem("navbar");
  loadBootstrapAndActivateLinks(); // Load Bootstrap and set active links
}

// Function to dynamically load Bootstrap and set active links
function loadBootstrapAndActivateLinks() {
  // Load Bootstrap script dynamically
  const scriptBootstrap = document.createElement("script");
  scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
  scriptBootstrap.onload = () => {
    // Ensure the navbar collapse works for mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
      });
    }
    
    // Set the active class on the current page's link
    highlightActiveLink();
  };
  document.body.appendChild(scriptBootstrap);
}

// Function to highlight the active link in the navbar
function highlightActiveLink() {
  // Get the current URL
  const currentLocation = window.location.href;

  // Get all nav links
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(link => {
    // Check if the link's href matches the current URL
    if (link.href === currentLocation) {
      link.classList.add('active'); // Add active class to the current link
    } else {
      link.classList.remove('active'); // Remove active class from other links
    }
  });
}
