let firstOperand = "";
let operation = "";
let secondOperand = "";
let result = 0;
let waitingForSecondOperand = false;

const visibleResultElement = document.getElementById("number");
const numberElements = document.querySelectorAll(".number");
const operatorElements = document.querySelectorAll(".operator");

visibleResultElement.value = "0";

// Prevent typing in the input
visibleResultElement.addEventListener("keypress", function (event) {
    event.preventDefault();
});

for (let i = 0; i < numberElements.length; i++) {
    numberElements[i].addEventListener("click", function (event) {
        event.preventDefault();
        if (!waitingForSecondOperand) {
            firstOperand += `${this.innerHTML}`;
            visibleResultElement.value = firstOperand;
        } else {
            secondOperand += `${this.innerHTML}`;
            visibleResultElement.value = secondOperand;
        }
    });
}


for (let i = 0; i < operatorElements.length; i++) {
    operatorElements[i].addEventListener("click", function (event) {
        event.preventDefault();

        if (firstOperand === "" && this.innerHTML === "-") {
            firstOperand += "-";
        } else if (firstOperand !== "" && secondOperand !== "") {
            refreshVisibleResult();
            operation = this.innerHTML;
        } else if (firstOperand !== "") {
            operation = this.innerHTML;
            waitingForSecondOperand = true;
        }
    });
}

document.getElementById("total").addEventListener("click", function (event) {
        event.preventDefault();
        refreshVisibleResult();
    }
);

function refreshVisibleResult() {
    switch (operation) {
        case "+":
            result = Number(firstOperand) + Number(secondOperand);
            break;
        case "-":
            result = Number(firstOperand) - Number(secondOperand);
            break;
        case "/":
            result = Number(firstOperand) / Number(secondOperand);
            break;
        case "x":
            result = Number(firstOperand) * Number(secondOperand);
            break;
        case "c":
            result = 0;
            operation = "+";
            break;
        default:
            visibleResultElement.value = "ERROR";
            return;
    }
    firstOperand = result;
    secondOperand = "";
    waitingForSecondOperand = true;
    visibleResultElement.value = result;
}