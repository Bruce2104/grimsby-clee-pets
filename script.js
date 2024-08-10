// Navbar burger toggle for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#burger');
    const navbarMenu = document.querySelector('#navbarBasicExample');

    burger.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-active');
    });
});

// Form submission handling
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
});
