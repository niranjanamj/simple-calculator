
let firstNumber = "";
let operator = "";
let newNumber = true;

const display = document.getElementById("display");

function appendNumber(number) {
    if (display.value === "Error") {
        display.value = "0";
    }

    if (newNumber) {
        display.value = number === "." ? "0." : number;
        newNumber = false;
    } else {
        if (number === "." && display.value.includes(".")) {
            return;
        }

        display.value += number;
    }
}

function chooseOperator(op) {
    if (display.value === "Error") return;

    if (operator !== "" && !newNumber) {
        calculate();
    }

    firstNumber = display.value;
    operator = op;
    newNumber = true;
}

function calculate() {
    if (operator === "" || newNumber) return;

    let secondNumber = Number(display.value);
    let a = Number(firstNumber);
    let result;

    if (operator === "+") {
        result = a + secondNumber;
    } else if (operator === "-") {
        result = a - secondNumber;
    } else if (operator === "*") {
        result = a * secondNumber;
    } else if (operator === "/") {
        result = secondNumber === 0
            ? "Error"
            : a / secondNumber;
    } else if (operator === "%") {
        result = a % secondNumber;
    }

    if (typeof result === "number") {
        result = Number(result.toPrecision(10));
    }

    display.value = String(result);
    operator = "";
    newNumber = true;
}

function clearDisplay() {
    display.value = "0";
    firstNumber = "";
    operator = "";
    newNumber = true;
}

function backspace() {
    if (display.value === "Error" || newNumber) {
        display.value = "0";
        newNumber = true;
        return;
    }

    display.value = display.value.slice(0, -1);

    if (display.value === "" || display.value === "-") {
        display.value = "0";
    }
}
