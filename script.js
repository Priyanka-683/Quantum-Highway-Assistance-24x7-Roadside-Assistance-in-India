// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, stop observing this specific element
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Slight offset for smoother entry
});

revealElements.forEach(el => revealObserver.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});








document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply reveal effect to the about content and image
    const aboutItems = document.querySelectorAll('.about-content, .about-image');
    aboutItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.8s ease-out";
        observer.observe(item);
    });
});














const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Thoda delay taaki ek ke baad ek aayein (Stagger effect)
            setTimeout(() => {
                entry.target.classList.add('show-card');
            }, index * 150); 
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach((card) => {
    card.classList.add('hide-card'); // Shuruat mein chhupa do
    observer.observe(card);
});










window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Initial check on load
revealOnScroll();














// Simple Pulse Animation for the Call Button
const ctaBtn = document.querySelector('.cta-button');
if(ctaBtn) {
    setInterval(() => {
        ctaBtn.style.boxShadow = '0 0 0 0 rgba(234, 179, 8, 0.7)';
        setTimeout(() => {
            ctaBtn.style.boxShadow = '0 0 20px 10px rgba(234, 179, 8, 0)';
        }, 500);
    }, 2000);
}











