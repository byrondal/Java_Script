/*Función que toma números como argumento y devuelve la suma de todos los números de la matriz*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sumTotal = 0;
    for(let i = 0; i < param.length; i++) {
        sumTotal = param[i] + sumTotal;
    }
    return console.log(sumTotal);
}


sumAll(numbers);

