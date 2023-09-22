// Get a reference to your navbar, the specific divs, and the navigation items
const navbar = document.querySelector('.header');
const targetDiv1 = document.querySelector('#about-phase-one'); // Replace with your first target div
const targetDiv2 = document.querySelector('#about-phase-two'); // Replace with your second target div
const targetDiv3 = document.querySelector('#contacts'); // Replace with your third target div
const navItems = document.querySelectorAll('.header-links'); // Replace with the actual selector for your navigation items

// Calculate the positions of the target divs relative to the top of the document
const targetDiv1Position = targetDiv1.offsetTop;
const targetDiv2Position = targetDiv2.offsetTop;
const targetDiv3Position = targetDiv3.offsetTop;

// Function to update the navbar background color and font color when scrolled
function updateNavbarStyles() {
    const scrollPosition = window.scrollY;

    // Change the background color based on scroll position
    if (scrollPosition >= targetDiv1Position && scrollPosition < targetDiv2Position) {
        navbar.style.background = 'black'; // Change to the first desired background color
    } else if (scrollPosition >= targetDiv3Position) {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)'; // Change to the third desired background color
    } else if (scrollPosition >= targetDiv2Position) {
        navbar.style.background = 'white'; // Change to the second desired background color
    } else {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)'; // Reset to the original background
    }

    // Change the font color of navigation items when scrolling to #about-phase-two
    if (scrollPosition >= targetDiv2Position) {
        navItems.forEach(item => {
            item.style.color = 'rgb(36, 13, 13)'; // Change to the desired font color
        });
    } else {
        // Reset the font color to the default for other sections
        navItems.forEach(item => {
            item.style.color = ''; // Reset to the default font color (empty string means use the CSS-defined color)
        });
    }
}

// Listen for the scroll event and call the update function
window.addEventListener('scroll', updateNavbarStyles);
