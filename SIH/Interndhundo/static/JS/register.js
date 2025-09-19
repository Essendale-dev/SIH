document.addEventListener('DOMContentLoaded', function() {
    // Set the copyright year
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Handle form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add real validation logic in the future
            alert('Account created successfully! Redirecting to login...');
            window.location.href = './login.html';
        });
    }
});