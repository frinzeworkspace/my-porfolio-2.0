
const navbar = document.querySelector('.header');
const targetDiv1 = document.querySelector('#about-phase-one');
const targetDiv2 = document.querySelector('#about-phase-two'); 
const targetDiv3 = document.querySelector('#contacts'); 
const navItems = document.querySelectorAll('.header-links'); 


const targetDiv1Position = targetDiv1.offsetTop;
const targetDiv2Position = targetDiv2.offsetTop;
const targetDiv3Position = targetDiv3.offsetTop;


function updateNavbarStyles() {
    const scrollPosition = window.scrollY;

    
    if (scrollPosition >= targetDiv1Position && scrollPosition < targetDiv2Position) {
        navbar.style.background = 'black'; 
    } else if (scrollPosition >= targetDiv3Position) {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)'; 
    } else if (scrollPosition >= targetDiv2Position) {
        navbar.style.background = 'white'; 
    } else {
    }

    
    if (scrollPosition >= targetDiv2Position) {
        navItems.forEach(item => {
            item.style.color = 'rgb(36, 13, 13)'; 
        });
    } else {
       
        navItems.forEach(item => {
            item.style.color = ''; 
        });
    }
}

window.addEventListener('scroll', updateNavbarStyles);
