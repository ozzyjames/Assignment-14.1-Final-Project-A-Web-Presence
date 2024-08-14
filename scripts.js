document.addEventListener('DOMContentLoaded', function() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.style.display = 'none';  // Ensure the message is hidden on page load

    function validateForm() {
        console.log("validateForm function called");

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const zipCode = document.getElementById('zip-code');
        
        const firstNameError = document.getElementById('first-name-error');
        const lastNameError = document.getElementById('last-name-error');
        const zipCodeError = document.getElementById('zip-code-error');
        
        let isValid = true;
        
        // Function to check if a string contains numbers
        function containsNumbers(str) {
            return /\d/.test(str);
        }
        
        // Validate first name
        if (firstName.value.trim() === '') {
            firstName.classList.add('error');
            firstNameError.textContent = 'First name is required.';
            firstNameError.style.display = 'block';
            isValid = false;
        } else if (firstName.value.trim().length > 10) {
            firstName.classList.add('error');
            firstNameError.textContent = 'First name must be 10 characters or less.';
            firstNameError.style.display = 'block';
            isValid = false;
        } else if (containsNumbers(firstName.value.trim())) {
            firstName.classList.add('error');
            firstNameError.textContent = 'First name cannot contain numbers.';
            firstNameError.style.display = 'block';
            isValid = false;
        } else {
            firstName.classList.remove('error');
            firstNameError.style.display = 'none';
        }
        
        // Validate last name
        if (lastName.value.trim() === '') {
            lastName.classList.add('error');
            lastNameError.textContent = 'Last name is required.';
            lastNameError.style.display = 'block';
            isValid = false;
        } else if (lastName.value.trim().length > 10) {
            lastName.classList.add('error');
            lastNameError.textContent = 'Last name must be 10 characters or less.';
            lastNameError.style.display = 'block';
            isValid = false;
        } else if (containsNumbers(lastName.value.trim())) {
            lastName.classList.add('error');
            lastNameError.textContent = 'Last name cannot contain numbers.';
            lastNameError.style.display = 'block';
            isValid = false;
        } else {
            lastName.classList.remove('error');
            lastNameError.style.display = 'none';
        }
        
        // Validate full name length
        const fullName = `${firstName.value.trim()} ${lastName.value.trim()}`;
        if (fullName.length > 20) {
            alert('Full name must be 20 characters or less.');
            isValid = false;
        }
        
        // Validate zip code
        const zipCodePattern = /^\d{5}$/;
        if (zipCode.value.trim() === '') {
            zipCode.classList.add('error');
            zipCodeError.textContent = 'Zip code is required.';
            zipCodeError.style.display = 'block';
            isValid = false;
        } else if (!zipCodePattern.test(zipCode.value)) {
            zipCode.classList.add('error');
            zipCodeError.textContent = 'Zip code must be exactly 5 digits.';
            zipCodeError.style.display = 'block';
            isValid = false;
        } else {
            zipCode.classList.remove('error');
            zipCodeError.style.display = 'none';
        }
        
        // Show or hide the secret message
        if (isValid) {
            secretMessage.style.display = 'block';
            console.log("Form is valid. Secret message shown.");
        } else {
            secretMessage.style.display = 'none';
            console.log("Form is invalid.");
        }
    }

    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Submit button clicked");
        validateForm();
    });
});