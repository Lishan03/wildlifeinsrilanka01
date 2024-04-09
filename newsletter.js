const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('email');
const subscribeBtn = document.getElementById('subscribeBtn');
const feedback = document.getElementById('feedback');

function handleFormSubmit(event) {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
        let storedEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

        if (!storedEmails.includes(email)) {
            storedEmails.push(email);
            localStorage.setItem('newsletterEmails', JSON.stringify(storedEmails));
            feedback.textContent = 'Thank you for subscribing!';
        } else {
            feedback.textContent = 'You are already subscribed.';
        }
        feedback.style.display = 'block';
        form.reset();
    } else {
        feedback.textContent = 'Please enter a valid email.';
        feedback.style.display = 'block';
    }
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener('submit', handleFormSubmit);
