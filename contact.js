document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');
    
    // Change button state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate sending (2 seconds)
    setTimeout(() => {
        btn.innerHTML = 'Message Sent!';
        btn.style.background = '#10b981'; // Green for success
        
        status.innerHTML = '<p style="color: #10b981; margin-top: 15px; font-weight: 600;">Thank you! Our team will call you shortly.</p>';
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.innerHTML = 'Send Message';
            btn.style.background = '#0f172a';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 3000);
    }, 2000);
});


















<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Isse Formspree ka boring page nahi khulega
        
        // Button loading state
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://formspree.io/f/xvzvdwzw", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // SUCCESS POP-UP
                Swal.fire({
                    title: 'Message Sent! 🚀',
                    html: 'Thank you for contacting <b style="color:#d4af37">Quantum Quest Innovations</b>.<br>We will get back to you shortly.',
                    icon: 'success',
                    confirmButtonColor: '#101828', // Aapka navy blue button color
                    confirmButtonText: 'Perfect!'
                }).then(() => {
                    contactForm.reset(); // Form khali kar dega
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            // ERROR POP-UP
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#101828'
            });
        } finally {
            // Button wapas normal
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
</script>