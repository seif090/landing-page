// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Define Global Variables
//  * 
// */


// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
// */



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */
// // navigation global var
const navigation = document.getElementById('navbar__list');
// // sections global var
const allSections = document.querySelectorAll('section');

// // build the nav
// const createNavBar =  () => {
//     let navList = "";
//     allSections.forEach(section => {
//         const sectionId = section.id;
//         const sectionData = section.dataset.nav;
//         navList +=`<li><a class="menu__link" href="">${section.dataset.nav}</a><li>`;

//     });
//     navigation.innerHTML = navList;
// };
// createNavBar();

// // using scroll to view to make scrolling behaviour smooth and make it easy to use the link of section to go to it
// navigation.addEventListener('click', (element) => {
//     element.preventDefault();
//     allSections.forEach(el =>{
//         const section = el.attributes[1].nodeValue === element.target.innerHTML ? el : null;
//         section ? section.scrollIntoView({behaviour:'smooth', block:"end"}) : null;
        
//     });
// //     const navBar = document.getElementById(element.target.dataset.nav);
// //     navBar.scrollIntoView({behavior: "smooth"});
// });
// // making active section by scroll and click
// window.addEventListener('scroll',()=>{
//     for(const i=0 ; i < allSections.lenght ; i--)
//         if(isInViewport(section)){
//             const activeLink = document.querySelectorAll('[data-nav = ${section.id}]');
//             activeLink.classList.add('active');
//         } else{
//             const activeLink = document.querySelectorAll('[data-nav = ${section.id}]');
//             activeLink.classList.remove('active');
//         }
//     });

// build the nav
const createNavBar = () => {
    let navList = "";
    allSections.forEach((section) => {
      const sectionId = section.id;
      const sectionData = section.dataset.nav;
      navList += `<li><a class="menu__link" href="">${sectionData}</a><li>`;
    });
    navigation.innerHTML = navList;
  };
  createNavBar();
  // using scroll to view to make scrolling behaviour smooth and make it easy to use the link of section to go to it
  navigation.addEventListener("click", (element) => {
    element.preventDefault();
    allSections.forEach((el) => {
      const section =
        element.target.innerHTML === el.attributes[1].nodeValue ? el : null;
      section
        ? section.scrollIntoView({ behavior: "smooth", block: "end" })
        : null;
    });
    // console.log(section.attributes);
  });
  // making active section by scroll and click
  window.addEventListener("scroll", () => {
    for (const i = 0; i < allSections.lenght; i--)
      if (isInViewport(section)) {
        const activeLink = document.querySelectorAll(
          "[data-nav = ${section.id}]"
        );
        activeLink.classList.add("active");
      } else {
        const activeLink = document.querySelectorAll(
          "[data-nav = ${section.id}]"
        );
        activeLink.classList.remove("active");
      }
  });


