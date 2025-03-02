// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation
const elements = document.querySelectorAll('section, .work-item, .highlight, .diagram-image, .impact-item, .blog-post, .team-member');
const fadeIn = () => {
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);

// Initial CSS for fade-in
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});


document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Dropdown toggle for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});

