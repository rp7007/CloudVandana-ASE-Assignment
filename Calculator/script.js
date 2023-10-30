let displayValue = '';

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
