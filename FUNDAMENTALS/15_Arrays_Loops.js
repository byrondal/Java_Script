//Calcular la media de una colección de notas
const getAverage = (scores) => {
    let sum = 0;

    for( let i = 0; i < scores.length; i++) {
        const scores = score[i];
        sum = sum + scores;
    }
    return sum / scores.length;
};

const marks = [10, 4, 6, 9, 4, 6, 1];
const average = getAverage(marks);
console.log(`La media de las notas es: ${average}`);

//Segundo ejercicio filtrar los número que sean pares

const getEvenNumbers = (numbers) => {
    const evenNumbers = [];

for(let i = 0; i < numbers.length; i++){
    const number = number[i];
    
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}
    return evenNumbers;
};

const evenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6, 10, 9, 12]);
console.log(`Los numeros pares son:`, evenNumbers);

