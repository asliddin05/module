let calculator = function(num1,num2,operator) {
    num1 = +prompt("Enter the first number");
    operator = prompt("Enter the operator for calculating");
    num2 = +prompt("Enter the second number");
    let result = 0;
    
    switch(operator){
        case "+":
            result = num1 + num2;
            return `${num1} + ${num2} = ${result}`;
            break;
        case "-":
            result = num1 - num2;
            return `${num1} - ${num2} = ${result}`;
            break;
        case "*":
            result = num1 * num2;
            return `${num1} * ${num2} = ${result}`;
            break;
        case "/":
            result = num1 / num2;
            return `${num1} / ${num2} = ${result}`;
            break;
        default:
            return "Invalid operator";
    }
}

export {calculator};