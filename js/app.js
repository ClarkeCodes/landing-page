/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const navbar = document.querySelector('.navbar__menu');
// for(section of sections) {
    
// }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();

for(section of sections) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    
    fragment.appendChild(listElement);
}


// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event
function smoothScroll(event) {
    event.preventDefault();
    const element = document.querySelector(`section${event.target.hash}`);
    scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: "smooth"
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.querySelector('#navbar__list').appendChild(fragment);

// Scroll to section on link click
navbar.addEventListener('click', smoothScroll);

// Set sections as active
