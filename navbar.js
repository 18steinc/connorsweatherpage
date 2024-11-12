//navbar.js
fetch("navbar.html")
    .then(response => response.text())
    .then(data => document.getElementById("navbar").innerHTML = data);
  // Dynamically load bootstrap JS components after loading navbar
    const scriptBootstrap = document.createElement("script");
    scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
    scriptBootstrap.onlaod = ( ) +> {
        //Ensure the navbar collpse works for mobile
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('#navbarNav');

      navbarToggler.addEventListener('click', ( ) => {
        navbarCollapse.classicList.toggle('show');
      });
};
    document.body.appendChild(scriptBootstrap);
  }]
    .catch(error => console.error("Error loading navigation bar:", error));


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
