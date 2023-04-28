/* Cambiar el valor de la propiedad 'age' a 25 */

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

/* Declara 3 variables con los nombres y valores siguientes */

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy', firstName, lastName,',', 'tengo', age, 'años y me gustan los lobos')


/* Imprime con un console.log la suma del precio de ambos juguetes */

const toy1 = {name:'Buss myYear', price: 19};
const toy2 = {name:'Rallo macking', price: 29};

console.log(toy1.price + toy2.price)

/* Ejercicio 2.4 */

let globalBestPrice = 10000;
const car1 = {name:'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name:'Chebrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBestPrice = 25000;
console.log(globalBestPrice);

car1.finalPrice = car1.basePrice + globalBestPrice;
car2.finalPrice = car2.basePrice + globalBestPrice;

console.log(car1, car2);

