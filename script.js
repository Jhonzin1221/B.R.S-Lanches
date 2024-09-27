document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}