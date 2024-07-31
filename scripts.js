// .querySelector() method selects an element from the document. This is set to a variable. 

// The .classList attribute is the list of classes from the element

// .toggle() method adds/appends the class "open", this can be toggled on and off.

// We can then access the .element.open in .css to change behavior when this function is called using onclick="toggleMenu()"

function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}