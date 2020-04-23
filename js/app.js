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
const navbar = document.querySelector('.navbar__menu');
let scrolling = false;
let cursor;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Get the top and bottom Y coordinates of a given page section, returns an object
function findRange(section) {
    const range = {
        top: section.offsetTop - 100, 
        end: section.offsetTop + section.offsetHeight - 100
    };
    return range;
}

// Check if current position is within the range of a section, returns a boolean
function inRange(curr, section) {
    const range = findRange(section);
    if(curr >= range.top && curr <= range.end) {
        return true;
    }
    return false;
}

// Check if current element has the active class
function isActive(section) {
    if(section.classList.length > 0) {
        return true;
    }
    return false;
}

// Throttle scroll events to fire every 200ms
setInterval(function () {
    if(scrolling) {
        addClass(cursor);
        scrolling = false;
    }
}, 200);


// Find current active nav link 
// function navActive(section) {
    
//     const curActive = document.querySelector('.menu__link.current');

//     console.log(curActive);
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
function addClass(cursor) {
    // if section is in range, check if element is already active, if not, add class
    for(section of sections) {
        if(inRange(cursor, section)) {
            if(isActive(section)) {
                console.log(section.id);
                return;
            }
            else {
                document.querySelector('.now-active').classList.remove('now-active');
                section.classList.add('now-active');
            }
        }
    }
}

// Scroll to anchor ID using scrollTO event and highlight clicked button
function smoothScroll(event) {
    event.preventDefault();
    // const clickeddocument.querySelector(`a[href="${event.target.hash}"]`);
    // check if clicked link is highlighted
    // event.target.classList.add('current');
    // const element = document.querySelector(`section${event.target.hash}`);
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

// const startingTime = performance.now();

// Build menu 
document.querySelector('#navbar__list').appendChild(fragment);

// Scroll to section on link click
navbar.addEventListener('click', smoothScroll);

// Set sections as active
document.addEventListener('scroll', function(event) {
    cursor = event.path[1].scrollY;
    scrolling = true;
});

// const endTime = performance.now();
// console.log("This time took " + (endTime - startingTime) + ' ms');