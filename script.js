// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission to Google Form
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'; // Replace with your Google Form ID

    // Disable form fields and make them readonly
    const inputs = form.querySelectorAll('input, select, button');
    inputs.forEach(input => {
        input.setAttribute('readonly', 'true');
        input.disabled = true;
    });

    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Google Forms
    })
    .then(() => {
        alert('Thank you for your reservation! Payment details will be sent to your mobile number.');
        // Optionally, keep form readonly or reset it after a delay
        // form.reset();
        // inputs.forEach(input => input.removeAttribute('readonly'));
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an issue submitting your reservation. Please try again.');
        // Re-enable form on error
        inputs.forEach(input => {
            input.removeAttribute('readonly');
            input.disabled = false;
        });
    });
});

// Scroll to contact section on page load
window.onload = function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
};