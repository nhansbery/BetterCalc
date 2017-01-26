var current_input = "";
var memory = "0"; //always starts with zero displayed on the screen
var operator = 0; //always starts out with no (or zero) operator being selected
var degree = "true";
/**
 * Displays the current input onto the calculator's screen
 */
function displayCurrentInput() {
    if (current_input == "") {
        document.getElementById('screen').value = memory;
    }
    else {
        document.getElementById('screen').value = current_input;
    }
}
/**
 * Adds the number onto the screen that user selects until it reaches 30 numbers, then restarts
 * @param {number} dig the button/value that the user selects that they want to display
 */
function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else if (current_input.length < 30) {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
/**
 * Adds a decimal to the number on the screen each time the user selects it
 */
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
/**
 * Clears all of the values that are on the calculator screen
 */
function allClear() {
    current_input = "";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Clears the current input value to 0
 */
function cancel() {
    current_input = "";
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 * @param {object} op all of the different operations like Addition (+), Subtraction (-), Multiplication (*), and Division (/).
 * @return {number} if there is no operator selected, returns what was there originally
 */
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
/**
 * Calculates the inputted numbers using all of the operators on the calculator using the memory and what is current
 */
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
/**
 * Changes the sign of the current input if the wrong operator was selected; i.e. multiplication operator is selected when you are trying to execute an addition problem, changeSign is selected and they switch
 * @return {number} if there is no change to the sign requested, returns what was there originally
 */
function changeSign() {
    if (current_input == "") {
        return;
    }
    current_input = current_input * (-1);
    displayCurrentInput();
}
/**
 * Changes the number that is on the screen currently from an integer into a percentage
 * @return {number} if no button was selected, returns what was there
 */
function percentage() {
    if (currentInput == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    current_input = current_input / 100; //the percentage of a number is always that number divided by 100
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
/**
 * Calculates the factorial of the current number when the X! button is selected
 * @return {number} if no button was selected, returns what was there
 */
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
/**
 * Squares the number (x = x*x), when the x^2 button is selected
 * @return {number} if no button was selected, returns what was there
 */
function square() {
    if (current_input == "") {
        return;
    }
    if (operator > 0) {
        calculate();
    }
    curren_input = Math.pow(currentInput, 2); //the same as multiplying that number to itself
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
/**
 * Turns the current number into it's square root when the √x button is selected
 * @return {number} if no button was selected, returns what was there
 */
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
/**
 * Calculates what the inverse of the current number is when the 1/X button is selected
 * @return {number} if no button was selected, returns what was there, but if the number is zero it will return error as there is no inverse of 0
 */
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
/**
 * Takes the current number and gives the Sin of it when the sin button is selected, a trigometric function
 * @return {number} if no button was selected, returns what was there
 */
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
/**
 * Takes the current number and gives the Cos of it when the cos button is selected, a trigometric function
 * @return {number} if no button was selected, returns what was there
 */
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
