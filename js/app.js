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

/* This function is responsible for highlight the associated
 section name in the nav bar according to user scroll */
function active(sectionId) {
    const listItem = document.querySelectorAll('li');
    //const link = document.querySelectorAll('a');
    console.log(listItem);
    for(let z = 0; z < listItem.length ; z++){
        if (listItem[z].classList.contains(sectionId)) {
            // link[z].classList.remove('menu__link');
            // link[z].classList.add('activeItem');
            // listItem[z].classList.remove('unActiveSection');
            // listItem[z].classList.add('activeSection');
            listItem[z].classList.remove('menu__link');
            listItem[z].classList.add('activeItem');
        }
    }
    
}
/* This function is responsible for unhighlight the associated
 section name in the nav bar according to user scroll */
function unActive(sectionId) {
    const listItem = document.querySelectorAll('li');
    // const link = document.querySelectorAll('a');
    console.log(listItem);
    for(let z = 0; z < listItem.length ; z++){
        if (listItem[z].classList.contains(sectionId)) {
            // link[z].classList.remove('activeItem');
            // link[z].classList.add('menu__link');
            // link[z].setAttribute('class','menu__link');
            // listItem[z].classList.remove('activeSection');
            // listItem[z].classList.add('unActiveSection');
            listItem[z].classList.remove('activeItem');
            listItem[z].classList.add('menu__link');

        }
    }
}

// EventListener function 
function scrollTotheSection(event) {
    const block = event.target.dataset.block;
    console.log(block);
    document.getElementById(block).scrollIntoView({ behavior: "smooth" });
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

// navBar.setAttribute('class', 'navbar__menu ul');

for(let i = 0; i < sectionsName.length; i++){
    //Create anchor element for scrolling to section on link click
    // const link = document.createElement('a');
    // link.setAttribute('class', 'link'+ (i+1));
    // link.textContent = sectionsName[i].textContent;

    //Create list item in nav bar
    const section = document.createElement('li');
    section.setAttribute('class', 'menu__link section'+ (i+1));
    section.setAttribute('data-block', 'section'+ (i+1));
    section.textContent = sectionsName[i].textContent;
    // section.scrollIntoView(true);
    navBar.appendChild(section);
    //section.appendChild(link);
    
};

document.querySelectorAll('.menu__link').forEach((elem) => {
    elem.addEventListener('click', scrollTotheSection)
});

// let btn = document.querySelector('.link2');
// let el = document.querySelector('#section2');

// btn.addEventListener('click', function(){
//     el.scrollIntoView(false);
// })


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Set sections as active


//Create Intersecion Observer to handle scrolling process
const sections = document.querySelectorAll("section");

const options = {
    root : null,
    threshold: 0.39,
    rootMargin: "0px 0px -200px 0px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        //console.log(entry);
        if (entry.isIntersecting){
            console.log(entry.target.id);
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

