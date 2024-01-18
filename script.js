let n1 = 0;
let n2 = 0;
let operator = '';

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

const btn = document.getElementsByClassName('btn');
const display = document.getElementById('display');
const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

btn.addEventListener('click', event => {
    
});