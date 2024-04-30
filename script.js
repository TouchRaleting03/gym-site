document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateName(nameInput.value) && validateEmail(emailInput.value) && validateMessage(messageInput.value)) {
            // Form submission logic (e.g., sending data to server)
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    function validateName(name) {
        return name.trim() !== '';
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateMessage(message) {
        return message.trim() !== '';
    }
});
