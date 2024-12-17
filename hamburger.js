const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

const closeMenuBtn = document.getElementById("close-menu");
closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("show");
});