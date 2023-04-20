const marks = [10, 4, 6, 9, 4, 6, 7];

marks [0] //sería el 10
console.log (`El arraz marks tiene longitud: ${marks.length}`);

const length = marks.length; // 7

const lastMark = marks[marks.length - 1]; //acceder al último elemento del array
console.log(`La ultima nota es: ${lastMark}`);

marks[0] = 4; //cambio de valor la primera nota
console.log(`La nota del primer alumno es: ${marks[0]}`); //mutación del contenido

//añadir al principio del array

marks.unshift(3); //añadimos un 3 delante del 4 
console.log('Unshift: ', marks);

//quitar el primer elemento del array

marks.shift();
console.log(marks);

//añadir un elemento al final del array

marks.push(8);
console.log(marks);

//eliminar el último elemento del array

marks.pop();
console.log(marks);


const fruits = ['kiwi', 'manzana', 'melón'];
const firstFruits = fruits.slice(0,1);
console.log(`El array con la primera fruta es:`, firstFruits);

//copiar un array entero
const copyFruits = fruits.slice();
console.log('copy fruits array', copyFruits);

//hacer una referencia a un array
const reassignFrutis = fruits;
reassignFrutis.push('Sandia');

console.log('Reassigned fruits:', reassignFrutis);
console.log('Fruits:', fruits);






