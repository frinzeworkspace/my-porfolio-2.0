// Get a reference to your navbar and the specific divs
const navbar = document.querySelector('.header');
const targetDiv1 = document.querySelector('#about-phase-one'); // Replace with your first target div
const targetDiv2 = document.querySelector('#about-phase-two'); // Replace with your second target div

// Calculate the positions of the target divs relative to the top of the document
const targetDiv1Position = targetDiv1.offsetTop;
const targetDiv2Position = targetDiv2.offsetTop;

// Function to update the navbar background color when scrolled
function updateNavbarBackgroundColor() {
    const scrollPosition = window.scrollY;

    // Change the background color based on scroll position
    if (scrollPosition >= targetDiv1Position && scrollPosition < targetDiv2Position) {
        navbar.style.background = 'black'; // Change to the first desired background color
    } else if (scrollPosition >= targetDiv2Position) {
        navbar.style.background = 'white'; // Change to the second desired background color
    } else {
        navbar.style.background = 'linear-gradient(90deg, rgba(178,223,222,1) 1%, rgba(56,120,89,1) 51%, rgba(68,19,23,1) 99%)'; // Reset to the original background
    }
}

// Listen for the scroll event and call the update function
window.addEventListener('scroll', updateNavbarBackgroundColor);


