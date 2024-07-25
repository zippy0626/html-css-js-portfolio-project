// toggleMenu function, menu and icon variables set to document (our document), and method queryselector to select elements on our website.
function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}