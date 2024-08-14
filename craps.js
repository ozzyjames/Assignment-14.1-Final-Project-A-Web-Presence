// Function to play the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6 (inclusive)
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    const sum = die1 + die2;

    // Call the calculateResult function to determine the game result
    const result = calculateResult(sum);

    // Display the result on the web page
    document.getElementById("result").innerHTML = `Dice 1: ${die1}<br>Dice 2: ${die2}<br>Sum: ${sum}<br>${result}`;
}

// Function to calculate the game result based on the sum of the dice
function calculateResult(sum) {
    // If the sum is 7 or 11, the player loses (Craps)
    if (sum === 7 || sum === 11) {
        return "CRAPS - You Lose!";
    }
    // If the dice are doubles (same value) and even (2, 4, or 6), the player wins
    else if (sum === 2) {
        return "You Won!";
    }
    // If none of the above conditions are met, the player pushes (neither wins nor loses)
    else {
        return "You Pushed!";
    }
}

// Add an event listener to the button click
document.getElementById("playBtn").addEventListener("click", playCraps);