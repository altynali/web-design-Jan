document.getElementById("mobile-menu").addEventListener("click", function () {
  const navListContainer = document.querySelector(".nav-list-container");
  const menuToggle = document.querySelector(".menu-toggle");
  console.log("Ahoj");
  navListContainer.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
