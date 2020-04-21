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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();

for(section of sections) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
    
    fragment.appendChild(listElement);
}


// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.querySelector('#navbar__list').appendChild(fragment);

// Scroll to section on link click

// Set sections as active
