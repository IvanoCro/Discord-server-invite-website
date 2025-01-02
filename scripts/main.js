const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavigationLinks = document.querySelectorAll('.mobile-nav-link');
const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
const buttonCircle = document.querySelectorAll('.circle');
onload = () => {
    document.body.classList.add('light-theme');
}

themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
        buttonCircle.forEach(circle => {
            circle.classList.toggle('active');
        });
    });
});

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

mobileNavigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});