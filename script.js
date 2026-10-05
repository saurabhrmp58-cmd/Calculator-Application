let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear complete display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
    let expression = display.value;

    if (expression === "") {
        return;
    }

    // Check division by zero
    if (/\/0(?!\d)/.test(expression)) {
        display.value = "Cannot divide by 0";
        return;
    }

    try {
        // Replace percentage with /100
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        // Validate input
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            display.value = "Invalid Input";
            return;
        }

        let result = eval(expression);

        if (!isFinite(result)) {
            display.value = "Invalid Operation";
            return;
        }

        display.value = result;

    } catch (error) {
        display.value = "Invalid Input";
    }
}
