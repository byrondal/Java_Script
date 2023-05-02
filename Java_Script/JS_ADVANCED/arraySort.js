const numbers = [1, 10, 4, 3, 5, 6];


/* dos funciones para aplicar a nuestros proyectos para números */

const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;


numbers.sort(orderNumbersAscending);


console.log(numbers); /*[3, 4, 5, 6] los ordena ascendentemente*/

const names = ['pepe', 'juan', 'alberto', 'Pepe', 'Ramon'];

/* dos funciones para aplicar a nuestros proyectos para strings */
const compareStringsAscending = (a, b) => a.localeCompare(b);
const compareStringsDescending = (a, b) => b.localeCompare(a);


names.sort();

console.log(names);

names.sort((a, b) => {
    return a.localeCompare(b); /*ordena strings de forma ascendente a-z y si ponemos una a en lugar de la ve ordena z-a*/
});

const people = [
    {name: 'juan', age: 30},
    {name: 'Ramon', age: 40},
    {name: 'Pepe', age: 50},
    {name: 'pepe', age: 20},
    {name: 'alberto', age: 75},
];


people.sort((a, b) => {
    return compareStringsAscending(a.name, b.name);
});

people.sort((a, b) => {
    return orderNumbersAscending(a.age, b.age);
});

console.log(people);


