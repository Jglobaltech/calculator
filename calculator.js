
let display = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
    shouldResetDisplay = false;
}

function deleteLast() {
    if (shouldResetDisplay) {
        clearDisplay();
        return;
    }
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    if (currentInput === '' && operator === '-') {
        // Allow negative numbers
        currentInput += operator;
    } else if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
        currentInput += ` ${operator} `;
    }
    display.innerText = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/'));
        display.innerText = result;
        currentInput = result.toString();
        shouldResetDisplay = true;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
        shouldResetDisplay = true;
    }
}

