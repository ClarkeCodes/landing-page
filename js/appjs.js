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

// Build navigation menu content
const fragment = document.createDocumentFragment();

for(section of sections) {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

    fragment.appendChild(listElement);
}

document.querySelector('#navbar__list').appendChild(fragment);