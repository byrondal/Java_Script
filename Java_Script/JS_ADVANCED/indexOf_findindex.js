
const animal = ['perro', 'gato', 'toro', 'pollo'];

const indexOfBull = animals.indexOf('toro')
console.log(indexOfBull); /*nos indica la posición del toro y solo vale para stings o números puntualmente*/

const people = [
    {name: 'A', age: 20},
    {name: 'B', age: 30},
    {name: 'C', age: 40},
    {name: 'D', age: 50},
    {name: 'C', age: 45},
    {name: 'C', age: 50},
];

const index = people.findIndex((person) => {
    if(person.name === 'C' && person.age >= 45 && person.age <=50){
        return true;
    }
});

console.log(index);


