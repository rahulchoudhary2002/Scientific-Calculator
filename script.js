// script.js

let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value += number;
    }
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    let secondOperand = display.value;
    display.value = eval(`${firstOperand} ${currentOperation} ${secondOperand}`);
    currentOperation = null;
    shouldResetDisplay = true;
}

function clearDisplay() {
    display.value = '';
    firstOperand = null;
    currentOperation = null;
    shouldResetDisplay = false;
}

function sqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
    shouldResetDisplay = true;
}

function pow() {
    firstOperand = display.value;
    currentOperation = '**';
    shouldResetDisplay = true;
}

function sin() {
    display.value = Math.sin(parseFloat(display.value));
    shouldResetDisplay = true;
}

function cos() {
    display.value = Math.cos(parseFloat(display.value));
    shouldResetDisplay = true;
}

function tan() {
    display.value = Math.tan(parseFloat(display.value));
    shouldResetDisplay = true;
}

function log() {
    display.value = Math.log10(parseFloat(display.value));
    shouldResetDisplay = true;
}
