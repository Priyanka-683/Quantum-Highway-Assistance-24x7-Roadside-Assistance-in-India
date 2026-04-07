document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 
    
    const btn = document.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');
    const originalText = 'Send Message'; 
    
    // 1. Loading Animation (Purana Style)
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    const formData = new FormData(this);

    try {
        // 2. Asli Data Sending (Formspree)
        const response = await fetch("https://formspree.io/f/xvzvdwzw", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // 3. Success Animation (Purana Style)
            btn.innerHTML = 'Message Sent!';
            btn.style.background = '#10b981'; // Green
            status.innerHTML = '<p style="color: #10b981; margin-top: 15px; font-weight: 600;">Thank you! Our team will call you shortly.</p>';

            // 4. Naya Pop-up (SweetAlert)
            Swal.fire({
                title: 'Success! 🎉',
                text: 'Your request has been sent to Quantum Quest Innovations.',
                icon: 'success',
                confirmButtonColor: '#101828'
            });

            this.reset(); // Form khali kar do

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#0f172a'; 
                btn.style.opacity = '1';
                btn.disabled = false;
                status.innerHTML = ''; 
            }, 3000);

        } else {
            throw new Error();
        }
    } catch (error) {
        Swal.fire('Oops!', 'Check your internet connection.', 'error');
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
    }
});



    






























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





















