const animals = ['Panda', 'Pollo', 'Vaca', 'León'];


const herbAnimals = [];

for(let i = 0; i < animals.length; i++){
    const animal = animals[i];
    if(animal === 'Panda' || animal === 'Vaca'){
        herbAnimals.push(animal);
    }
}

const herbAnimals = animals.filter((animal) => { /* filter devuelve siempre true o false*/
    const isHerbAnimal = animal === 'Panda' || animal === 'Vaca';
    return isHerbAnimal;
})

console.log(herbAnimals);

/*uno de los mejores combos es combinar .filter con .map*/


