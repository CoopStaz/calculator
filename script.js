let num1 = 0;
let num2 = 0;
let operator;

const add = function(n1, n2) {
    return n1 + n2;
}

const subtract = function(n1, n2) {
    return n1 - n2;
}

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1 / n2;
}

const operate = function(n1, n2, operator) {
    if (operator == '+') add(n1, n2);
    
    if (operator == '-') subtract(n1, n2);

    if (operator == '*') multiply(n1, n2);

    if (operator == '/') divide(n1, n2);

}