


const animals = ['perro', 'gato', 'toro', 'pollo'];
const newAnimals = ['serpiente', 'uron'];

newAnimals.forEach((animal) =>{
    animals.push(animal);
});

const updateAnimals = animals.concat(newAnimals);



console.log(updateAnimals);


const batchOfAnimals = [
    ['cebra', 'pez'],
    ['vaca', 'buey'],
    'cerdo',
];


const fullAnimalList = animals.concat(batchOfAnimals.flat());

console.log(fullAnimalList);



