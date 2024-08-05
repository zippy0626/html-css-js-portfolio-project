// .querySelector() method selects an element from the document. This is set to a variable. 

// The .classList attribute is the list of classes from the element

// .toggle() method adds/appends the class "open", this can be toggled on and off.

// We can then access the .element.open in .css to change behavior when this function is called using onclick="toggleMenu()"

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
};

function toggleDark() {
    const allElements = document.querySelectorAll('*'); // all elements in a list

    allElements.forEach(element => {
        element.classList.toggle('dark-mode');
    }  
    );
};

function checkEmail() {
    const textArea = document.querySelector(".email-textarea")
    const emailField = document.querySelector(".email-field")
    const noEmail = document.querySelector('.no-email-message')
    const noText = document.querySelector(".error-message")
    const confirmMsg = document.querySelector(".confirm-message")
    

    if (textArea.value.trim() === '' && emailField.value.trim() === '') {
        noText.style.display = "flex";
        noEmail.style.display = 'flex';
        confirmMsg.style.display = 'none';
    } else if (textArea.value.trim() === '') {
        noText.style.display = "flex";
        noEmail.style.display = 'none';
        confirmMsg.style.display = 'none';
    } else if (emailField.value.trim() === '') {
        noText.style.display = "none";
        noEmail.style.display = 'flex';
        confirmMsg.style.display = 'none';
    } else {
        noText.style.display = "none";
        noEmail.style.display = 'none';
        confirmMsg.style.display = 'flex';
    };

}