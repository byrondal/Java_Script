/*Calcular el promedio con una función*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let sumTotal = 0;
    let numbersAverage = 0;
    for(let i = 0; i < param.length; i++){
        sumTotal = sumTotal + param[i];
    }
    numbersAverage = sumTotal / param.length;
    return console.log(`El promedio del array de numeros proporcionado es: ${numbersAverage}`);
}

average(numbers);

