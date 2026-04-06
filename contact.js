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
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Page reload roko
    
    const btn = document.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');
    const originalText = btn.innerHTML; // Purana text save kar lo (Send Message)
    
    // --- AAPKA PURANA STYLE (START) ---
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    // --- AAPKA PURANA STYLE (END) ---

    const formData = new FormData(this);

    try {
        // ASLI DATA SENDING (Formspree Connect)
        const response = await fetch("https://formspree.io/f/xvzvdwzw", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // --- SUCCESS HONE PAR AAPKA PURANA STYLE ---
            btn.innerHTML = 'Message Sent!';
            btn.style.background = '#10b981'; // Green color
            
            status.innerHTML = '<p style="color: #10b981; margin-top: 15px; font-weight: 600;">Thank you! Our team will call you shortly.</p>';

            // SAATH MEIN NAYA POP-UP (SweetAlert)
            Swal.fire({
                title: 'Success! 🎉',
                text: 'Your request has been sent to Quantum Quest Innovations.',
                icon: 'success',
                confirmButtonColor: '#101828'
            });

            this.reset(); // Form khali kar do

            // 3 second baad button ko wapas normal karna
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#0f172a'; // Purana dark color
                btn.style.opacity = '1';
                btn.disabled = false;
                status.innerHTML = ''; // Status message hide kar do
            }, 3000);

        } else {
            throw new Error();
        }
    } catch (error) {
        // ERROR HONE PAR
        Swal.fire('Oops!', 'Message nahi ja paya. Internet check karein.', 'error');
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
    }
});
</script>