const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        // This toggles the 'active' class which makes the menu appear/disappear
        navMenu.classList.toggle('active');
        
        // Optional: Animate the hamburger bars if you want to get fancy later
        menuToggle.classList.toggle('is-active');
    });
}
