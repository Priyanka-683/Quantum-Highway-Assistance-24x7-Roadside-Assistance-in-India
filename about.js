document.addEventListener('DOMContentLoaded', () => {
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

    // Apply animation to cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});









const typingElement = document.getElementById('typing-text');
const words = ["Us", "Our Mission", "Our Vision", "Our Team"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    // Typing logic
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Speed control
    let typeSpeed = isDeleting ? 50 : 150;

    // Switch between typing and deleting
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);















document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});









// This will trigger the cards to fade in smoothly as you scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));









document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15 // Triggers when 15% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adding a slight delay for each card to create a "staggered" pop-up effect
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

















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



















<script>
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerText;
        
        // Loading state
        btn.innerText = "Sending...";
        btn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://formspree.io/f/xvzvdwzw", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Success Pop-up
                Swal.fire({
                    title: 'Message Sent! 🚀',
                    html: 'Thank you for reaching out to <b style="color:#d4af37">Quantum Quest Innovations</b>.<br><br>We have received your message and will get back to you shortly.',
                    icon: 'success',
                    confirmButtonColor: '#d4af37',
                    confirmButtonText: 'Understood!',
                    backdrop: `rgba(16, 24, 40, 0.4)`
                }).then(() => {
                    contactForm.reset(); // Form clear karne ke liye
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            // Error Pop-up
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please check your connection and try again.',
                icon: 'error',
                confirmButtonColor: '#d4af37'
            });
        } finally {
            // Re-enable button
            btn.innerText = originalText;
            btn.disabled = false;
        }
    });
</script>