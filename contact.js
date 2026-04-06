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
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Page refresh hone se rokta hai
        
        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerText;
        
        // Button loading state (Design wahi rahega, bas text badlega)
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
                // Success Popup (Aapke navy-blue theme se match karta hua)
                Swal.fire({
                    title: 'Message Sent! 🚀',
                    html: 'Thank you! We have received your message at <b style="color:#d4af37">Quantum Quest Innovations</b>.',
                    icon: 'success',
                    confirmButtonColor: '#101828' // Screenshot wala dark blue color
                }).then(() => {
                    contactForm.reset(); // Form clear ho jayega
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            Swal.fire('Oops!', 'Kuch galat hua. Please internet check karke dobara try karein.', 'error');
        } finally {
            // Button wapas normal ho jayega
            btn.innerText = originalText;
            btn.disabled = false;
        }
    });
</script>