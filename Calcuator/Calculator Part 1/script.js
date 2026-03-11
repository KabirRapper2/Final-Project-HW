function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}

// Event Handling
let numberButtons = document.getElementsByClassName("number");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        let output = reverseNumberFormat(getOutput());
        if (!isNaN(output)) {
            output = output + this.id;
            printOutput(output);
        }
    });
}

let operatorButtons = document.getElementsByClassName("operator");
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printOutput("");
            printHistory("");
        } else if (this.id == "backspace") {
    let output = reverseNumberFormat(getOutput()).toString();
    if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
    }
} else {
            let output = getOutput();
            let history = getHistory();
            if (output !== "") {
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id === "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}