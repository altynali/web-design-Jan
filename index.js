document.getElementById("mobile-menu").addEventListener("click", function () {
  const body = document.querySelector("body");
  const menuToggle = document.querySelector(".menu-toggle");
  const navListContainer = document.querySelector(".nav-list-container");

  navListContainer.classList.toggle("active");

  navListContainer.classList.contains("active")
    ? body.classList.add("hidden")
    : body.classList.remove("hidden");

  menuToggle.classList.toggle("active");
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});
