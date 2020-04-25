function Calculator(num1, num2, operator) {
    switch (operator) {
        case "-":
            return num2 - num1;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "+":
            return num1 + num2;
    }
}
console.log(Calculator(2, 4, "+"));
