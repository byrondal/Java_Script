var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;

//suma
var sum = 3 + 2;
console.log(`La suma vale: ' + ${sum}`);

//Resta

var substract = 10 - 4;
console.log(`La resta vale: ${substract}`);

// Multiplicacion

var multiply = 6 * 4;
console.log(`La multiplicacion vale: ${multiply}`);

//Division

var divide = 40 / 4;
console.log(`La division vale: ${divide}`);

//Division con decimales

var divideWithDecimals = 25 / 4;
console.log(`La division con decimales vale: ${divideWithDecimals}`);

//Resto

var rest = 25 % 4;
console.log(`El Resto vale: ${rest}`);

//Potencia

var power = 5**2;
console.log(`La potencia vale: ${power}`);

var complexCalculus = 2 + 2 * 4 + 5 / 5 + 6; 
console.log(complexCalculus); //hay que tener cuidado con estas operaciones y colocar los parentesis correctamente


var numberAsString = '30';
var number = 35;

console.log(number + +numberAsString); //una forma pero no recomendada por la sintaxis

const numberAsNumber = Number(numberAsString); //esta es la forma correcta de transformar un string en numero
console.log(number + numberAsNumber);


//NaN (Not a Number)
var notValidNumber = Number('_');
console.log(`Èl numero no valido es: ${notValidNumber}`);
var salary = 1000 * notValidNumber;


console.log(`Es el numero NaN? ${Number.isNaN(notValidNumber)}`);
console.log(`El salario es: ${salary}`);




