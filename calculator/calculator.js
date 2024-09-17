document.write("<table>");
document.write("<tr><th class='header'>X</th><th class='header operator'>Op</th><th class='header'>Y</th><th class='header'>Result</th></tr>");

let results = [];

while (true) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break;
    let y = prompt("Enter the second number (y):");
    if (y === null) break;
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    x = parseFloat(x);
    y = parseFloat(y);
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Invalid number";
    } else {
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = y !== 0 ? x / y : "Division by zero";
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "Invalid operator";
        }
    }

    document.write(`<tr><td>${x}</td><td class='operator'>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
    if (!isNaN(result)) results.push(result);
}

document.write("</table>");

if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, val) => acc + val, 0);
    let avg = total / results.length;

    document.write("<table>");
    document.write("<tr><th class='header'>Min</th><th class='header'>Max</th><th class='header'>Avg</th><th class='header'>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
}

