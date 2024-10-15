const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


function openModal(event) {
  var burgerItem = event.currentTarget;

  var imageSrc = burgerItem.getAttribute('data-image');
  var title = burgerItem.getAttribute('data-title');
  var description = burgerItem.getAttribute('data-description');


  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;

  
  document.getElementById("modal").style.display = "block";
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}


window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};