

const people = [
    {name: 'A', age: 20},
    {name: 'B', age: 30},
    {name: 'C', age: 40},
    {name: 'D', age: 50},
    {name: 'C', age: 45},
    {name: 'C', age: 50},
];


const newPeople = people.slice();

newPeople.reverse();

/* de esta forma trabajamos con una copia hecho por el slice*/

console.log('newPeople', newPeople);
console.log('people', people); /*cuidado que modifica el array original, puede ser problemático al programar*/



