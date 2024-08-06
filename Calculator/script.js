let display = document.getElementById('display');
let calculation = '';

function appendToDisplay(value) {
    display.value += value;
    calculation += value;
}

function clearDisplay() {
    display.value = '';
    calculation = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    calculation = calculation.slice(0, -1);
}

function calculate(operator) {
    if (operator === '=') {
        try {
            display.value = eval(calculation.replace(/X/g, '*')) || '';
            calculation = display.value;
        } catch {
            display.value = 'Error';
            calculation = '';
        }
    } else {
        calculation += operator;
        display.value += operator;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
        appendToDisplay(event.key);
    }
    if (['+', '-', '*', '/'].includes(event.key)) {
        calculate(event.key);
    }
    if (event.key === 'Enter') {
        calculate('=');
    }
    if (event.key === 'Backspace') {
        deleteLast();
    }
    if (event.key === 'Escape') {
        clearDisplay();
    }
});
