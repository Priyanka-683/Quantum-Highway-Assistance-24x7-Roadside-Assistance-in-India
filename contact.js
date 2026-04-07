document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const btn = document.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');
    const originalText = 'Send Message'; 
    const form = this;

    // 1. Loading Animation (Spinner)
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // 2. Data Tayyar Karna
    const data = new FormData(form);

    // 3. Asli Sending Logic
    fetch("https://formspree.io/f/xvzvdwzw", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // AGAR DATA PAHUNCH GAYA (Response code 200-299)
        if (response.ok) {
            btn.innerHTML = 'Message Sent!';
            btn.style.background = '#10b981'; // Green
            
            if(status) status.innerHTML = '<p style="color: #10b981; margin-top: 15px; font-weight: 600;">Thank you! Our team will call you shortly.</p>';

            // SUCCESS POP-UP
            Swal.fire({
                title: 'Success! 🎉',
                text: 'Your request has been sent to Quantum Quest Innovations.',
                icon: 'success',
                confirmButtonColor: '#101828'
            });

            form.reset(); // Form khali kar do
        } else {
            // Agar Formspree ne koi error bheja
            return response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    throw new Error(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    throw new Error("Submission failed");
                }
            });
        }
    }).catch(error => {
        // AGAR SACH MEIN KOI ERROR HAI
        console.error(error);
        Swal.fire('Oops!', 'Something went wrong. Please try again.', 'error');
    }).finally(() => {
        // 3 Second baad button wapas normal
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#0f172a'; 
            btn.style.opacity = '1';
            btn.disabled = false;
            if(status) status.innerHTML = ''; 
        }, 3000);
    });
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





















