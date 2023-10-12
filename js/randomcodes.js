/* ------ RANDOM CODES ---- */
// Function to generate a combination of characters
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // Generate characters multiple times using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Randomly select a character from the variable
        code += str.charAt(char); // Accumulate the generated character into a string of 8 characters
    }

    return code; // Return the final accumulated string when the loop ends
}

// Get HTML element to display the generated code
document.getElementById("codes").innerHTML = generateCode();

// Disable the button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

// Activate the disableButton function
disableButton();