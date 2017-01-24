var current_input = "";
var memory = "0";
var operator = 0;
var degree = "true";

function displayCurrentInput() {
    if (current_input == "") {
        document.getElementById('screen').value = memory;
    }
    else {
        document.getElementById('screen').value = current_input;
    }
}

function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else if (current_input.length < 30) {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
// Adds a decimal to the current input
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
// Clears everything.
function allClear() {
    current_input = "";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Clear the current input back to 0
function cancel() {
    current_input = "";
    displayCurrentInput();
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op) {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = current_input; //store value
    current_input = "";
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2 && current_input != "0") {
        current_input = eval(memory) / eval(current_input);
    };
    if (operator == 2 && current_input == "0") {
        current_input = "ERROR"
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Change the sign of the current input
function changeSign() {
    if (current_input == "") {
        return;
    }
    current_input = current_input * (-1);
    displayCurrentInput();
}
// Change the current input to a percentage
function percentage() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = current_input / 100;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    var fac = current_input;
    if (fac < 0 || (fac + "").indexOf(".") != -1) {
        fac = "ERROR";
    }
    else if (fac == 0) {
        fac = 1;
    }
    else {
        for (i = 1; i < current_input; i++) {
            fac = fac * i;
        }
    }
    current_input = fac;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = Math.pow(current_input, 2);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = Math.sqrt(current_input);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    if (current_input == "") {
        return;
    }
    if (current_input == 0) {
        current_input = "ERROR";
        operator = 0;
        memory = "0";
        displayCurrentInput();
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = 1 / current_input;
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

function tigSin() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    if (degree == true) {
        current_input = Math.sin(current_input / );
    }
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

function tigCos() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = Math.cos(current_input);
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
