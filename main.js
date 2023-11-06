
const navbar = document.querySelector('.header');
const targetDiv1 = document.querySelector('#about-phase-one');
const targetDiv2 = document.querySelector('#about-phase-two'); 
const targetDiv3 = document.querySelector('#projects');

const targetDiv4 = document.querySelector('#contacts'); 

const navItems = document.querySelectorAll('.header-links'); 

const navbarName = document.querySelector('#name')
const navbarHome = document.querySelector('#nav-home')
const navbarAbout = document.querySelector('#nav-about')
const navbarProjects = document.querySelector('#nav-projects')
const navbarContacts = document.querySelector('#nav-contacts')



const targetDiv1Position = targetDiv1.offsetTop;
const targetDiv2Position = targetDiv2.offsetTop;
const targetDiv3Position = targetDiv3.offsetTop;
const targetDiv4Position = targetDiv4.offsetTop;


function updateNavbarStyles() {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= targetDiv2Position) {
        navItems.forEach(item => {
            item.style.color = 'rgb(36, 13, 13)'; 
        });
    } else {
       
        navItems.forEach(item => {
            item.style.color = ''; 
        });
    }
    
    if (scrollPosition >= targetDiv1Position && scrollPosition < targetDiv2Position) {
        navbarName.style.color = 'white';
        navbar.style.background = 'black'; 
        navbarAbout.style.color = 'rgb(114, 33, 33)';
        navbarHome.style.color = 'white';
    } else if (scrollPosition >= targetDiv4Position) {
        navbar.style.background = 'black';
        navbarName.style.color = 'white';
        navbarHome.style.color = 'white';
        navbarAbout.style.color = 'white';
        navbarProjects.style.color= 'white';
        navbarContacts.style.color= 'rgb(114, 33, 33)';
    } else if (scrollPosition >= targetDiv3Position) {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)';
        navbarName.style.color = 'white';
        navbarHome.style.color = 'white';
        navbarAbout.style.color = 'white';
        navbarContacts.style.color = 'white';
        navbarProjects.style.color= 'rgb(114, 33, 33)';

    } else if (scrollPosition >= targetDiv2Position) {
        navbarName.style.color = 'white';
        navbarName.style.color = 'black';
        navbar.style.background = 'white'; 
        navbarAbout.style.color= 'rgb(114, 33, 33)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)';
    }

    

}

window.addEventListener('scroll', updateNavbarStyles);
