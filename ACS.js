document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navbar = document.getElementById('navbar');

    mobileMenuIcon.addEventListener('click', function() {
        navbar.classList.toggle('show-nav');
    });
});
