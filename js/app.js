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
const navBar = document.querySelector('#navbar__list');
const sectionsName = document.querySelectorAll('h2');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function active(sectionId) {
    const listItem = document.querySelectorAll('li');
    const link = document.querySelectorAll('a');
    console.log(listItem);
    for(let z = 0; z < listItem.length ; z++){
        if (listItem[z].classList.contains(sectionId)) {
            link[z].classList.remove('menu__link');
            link[z].classList.add('activeItem');
            listItem[z].classList.remove('unActiveSection');
            listItem[z].classList.add('activeSection');
        }
    }
    
}

function unActive(sectionId) {
    const listItem = document.querySelectorAll('li');
    const link = document.querySelectorAll('a');
    console.log(listItem);
    for(let z = 0; z < listItem.length ; z++){
        if (listItem[z].classList.contains(sectionId)) {
            link[z].classList.remove('activeItem');
            link[z].classList.add('menu__link');
            // link[z].setAttribute('class','menu__link');
            listItem[z].classList.remove('activeSection');
            listItem[z].classList.add('unActiveSection');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

for(let i = 0; i < sectionsName.length; i++){
    //Create anchor element for scrolling to section on link click
    const link = document.createElement('a');
    link.setAttribute('href', '#section' + (i+1));
    link.setAttribute('class', 'menu__link section'+ (i+1));
    link.textContent = sectionsName[i].textContent;

    //Create list item in nav bar
    const section = document.createElement('li');
    section.setAttribute('class', 'section' + (i+1));
    // section.setAttribute('class', 'navbar__menu .menu__link:hover');
    navBar.appendChild(section);
    section.appendChild(link);
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Set sections as active


//Create IntersecionObserver
const sections = document.querySelectorAll("section");

const options = {
    root : null,
    threshold: 0.25,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting){
            console.log(entry);
            active(entry.target.id);
        }
        else {
            unActive(entry.target.id);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

