// Variable to store what's shown on display
let displayValue = '';

// Function to add numbers/operators to display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear everything
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

// Function for squareroot
function squareRoot() {
    if (displayValue !== '') {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        document.getElementById('display').value = displayValue;
    }
}

// Function to delete last character
function deleteLastChar() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

// Function to calculate result
function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}