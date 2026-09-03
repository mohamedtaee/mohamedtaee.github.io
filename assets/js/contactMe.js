document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const submitButton = form.querySelector('button[type="submit"]'); // Reference to the submit button
    
    form.addEventListener('submit', function (e) {
        handleSubmitForm(e, form, formContainer, submitButton);
    });
});


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleSubmitForm(e, form, formContainer, submitButton) {
    e.preventDefault();

    toggleButtonState(submitButton, true);

    await delay(2000);

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/mlderbjz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const heading = document.createElement('h2');
        if (response.ok) {
            heading.textContent = 'Thank you for your message! I will get back to you soon.';
        } else {
            heading.textContent = 'Oops! Something went wrong, please try again.';
        }
        formContainer.replaceChildren(heading);
    } catch (error) {
        const heading = document.createElement('h2');
        heading.textContent = 'Oops! Something went wrong, please try again.';
        formContainer.replaceChildren(heading);
    } finally {
        toggleButtonState(submitButton, false);
    }
}

function toggleButtonState(button, isSending) {
    if (isSending) {
        button.disabled = true;
        button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
    } else {
        button.disabled = false;
        button.innerHTML = 'Send';
    }
}

