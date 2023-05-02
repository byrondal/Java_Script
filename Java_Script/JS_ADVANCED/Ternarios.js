/* Es un condicional simple */

const age = 30;
let isAllowed;

if(age > 30){
    isAllowed = true;
} else {
    isAllowed = false;
}

age > 30 ? (isAllowed = true) : (isAllowed = false);


isAllowed = age > 30 ? true : false;

const numberA = 2;

const numberB = 4;

let operation = 'multiply';

if(operation === 'multiply'){
    result = numberA * numberB
} else {
    result = numberA / numberB
}

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

/*const result = operation === 'multiply' ? numberA * numberB : numberA / numberB;*/
const result =
    operation === 'multiply' ? multiply(numberA, numberB) : divide(numberA, numberB); /* ternario combinado con funciones*/


