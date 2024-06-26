export const validateForm = () => {
    const form = document.getElementById('weather-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Validate form fields using regex
        const email = form.email.value;
        const password = form.password.value;
        const city = form.city.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Invalid email');
            return;
        }

        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and contain letters and numbers');
            return;
        }

        if (!city) {
            alert('City is required');
            return;
        }

        // Form is valid
        alert('Form submitted');
    });
};
