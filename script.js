// Dark Mode Toggle Script
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");

    // Check for saved dark mode preference in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Light Mode"; // Update icon to sun
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Check if dark mode is active and update button and localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀️ Light Mode"; // Update icon to sun
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Dark Mode"; // Update icon to moon
        }
    });
});
