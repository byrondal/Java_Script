function sum(a, b){
    return a + b;//scope GLOBAL
}

function substract(a, b){
    return a - b;
}

function doOperation(operation, a, b){
    var sum = (num1, num2) => num1 + num2;//scope LOCAL (aquí estamos SHADOWING a la función de scope GLOBAL)
    if (operation === 'sum'){
        return sum(a, b);
    } else if (oparation === 'substract'){
        return substract(a, b);
    } else {
        return 'No operation';
    }
}

const result = doOperation('sum', 3, 4);
console.log(`El resultado es: ${result}`);
