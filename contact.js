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


















<script>
    // 1. Form aur Button ko pakadna
    const myForm = document.getElementById('contactForm');
    const myBtn = document.getElementById('submitBtn');

    if(myForm) {
        myForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Page refresh roko
            
            myBtn.innerText = "Sending...";
            myBtn.disabled = true;

            // 2. Formspree ko data bhejna
            fetch("https://formspree.io/f/xvzvdwzw", {
                method: "POST",
                body: new FormData(myForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    // Success Popup
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message sent successfully to Quantum Quest Innovations',
                        icon: 'success',
                        confirmButtonColor: '#101828'
                    });
                    myForm.reset(); // Form khali karo
                } else {
                    Swal.fire('Error', 'Server issue, please try again.', 'error');
                }
            })
            .catch(error => {
                Swal.fire('Error', 'Check your internet connection.', 'error');
            })
            .finally(() => {
                myBtn.innerText = "Send Message";
                myBtn.disabled = false;
            });
        });
    } else {
        console.log("Error: Form ID 'contactForm' nahi mili!");
    }
</script>