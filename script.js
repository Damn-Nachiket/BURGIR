const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

// Add a click event listener to the hamburger icon
hamburgerMenu.addEventListener("click", () => {
  // Toggle the 'active' class to show/hide the navigation links
  navLinks.classList.toggle("active");
});
