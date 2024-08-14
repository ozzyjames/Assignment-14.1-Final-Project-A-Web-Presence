// Class to store palindrome check statistics
class PalindromeStats {
    constructor() {
        this.totalChecks = 0;
        this.palindromeCount = 0;
    }

    // Method to update statistics
    updateStats(isPalindrome) {
        this.totalChecks++;
        if (isPalindrome) {
            this.palindromeCount++;
        }
    }

    // Method to get statistics as a string
    getStatsString() {
        return `Total checks: ${this.totalChecks}, Palindromes found: ${this.palindromeCount}`;
    }
}

// Create an instance of PalindromeStats
const stats = new PalindromeStats();

// Function to check if the input is a palindrome
function checkPalindrome() {
    // Get the input string from the input field
    let input = document.getElementById('inputString').value;
    
    // Remove spaces and convert to lowercase
    let cleanedInput = input.replace(/\s/g, '').toLowerCase();
    
    // Reverse the cleaned input
    let reversedInput = cleanedInput.split('').reverse().join('');
    
    // Check if the cleaned input is equal to its reverse
    let isPalindrome = cleanedInput === reversedInput;
    
    // Get the result element
    let resultElement = document.getElementById('result');
    
    // Display the result
    if (isPalindrome) {
        resultElement.textContent = `"${input}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${input}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
    
    // Show the palindrome image
    document.getElementById('palindromeImage').style.display = 'block';
    
    // Update and display statistics
    stats.updateStats(isPalindrome);
    document.getElementById('stats').textContent = stats.getStatsString();
    
    // Validate input length
    validateInputLength(input);
    
    // Ask if the user wants to enter another word
    setTimeout(() => {
        if (confirm('Do you want to check another word?')) {
            clearInput();
        } else {
            alert('Thank you for using the Palindrome Checker!');
        }
    }, 500);
}

// Function to clear the input field and result
function clearInput() {
    document.getElementById('inputString').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('palindromeImage').style.display = 'none';
}

// Function to validate input length
function validateInputLength(input) {
    const maxLength = 50;
    if (input.length > maxLength) {
        alert(`Input is too long. Maximum length is ${maxLength} characters.`);
        // Truncate the input
        document.getElementById('inputString').value = input.slice(0, maxLength);
    }
}

// Event listener for input field to validate input in real-time
document.getElementById('inputString').addEventListener('input', function() {
    validateInputLength(this.value);
});