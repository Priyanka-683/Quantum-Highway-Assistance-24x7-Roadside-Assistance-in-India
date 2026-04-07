document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 
    
    const btn = document.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');
    const originalText = 'Send Message'; 
    
    // 1. Loading State
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    const formData = new FormData(this);

    try {
        // 2. Data Sending
        const response = await fetch("https://formspree.io/f/xvzvdwzw", {
            method: "POST",
            body: formData,
            headers: { 
                'Accept': 'application/json' // Ye Formspree ko batata hai ki hume JSON response chahiye
            }
        });

        // 3. Response Check (Yahan galti ho rahi thi)
        if (response.ok) {
            // SUCCESS UI
            btn.innerHTML = 'Message Sent!';
            btn.style.background = '#10b981'; 
            status.innerHTML = '<p style="color: #10b981; margin-top: 15px; font-weight: 600;">Thank you! Our team will call you shortly.</p>';

            // Success Pop-up
            Swal.fire({
                title: 'Success! 🎉',
                text: 'Your message has been sent successfully.',
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
            // Agar server 400/500 error de
            const data = await response.json();
            throw new Error(data.error || "Submission failed");
        }

    } catch (error) {
        // Ye sirf tab chalega jab Sach mein internet band ho ya request block ho
        console.error("Error details:", error);
        Swal.fire('Oops!', 'Something went wrong. Please try again.', 'error');
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





















