const animals = ['Panda', 'Nutria','Rana'];

const food = [];

const getAnimalFood = (animal) => {
    let food;

    if(animal === 'Panda'){
        food = 'Planta';
    } else if (animal === 'Nutria'){
        food = 'Peces';
    } else if (animal === 'Rana'){
        food = 'Bichos';
    }

    return food;
}

for(let i = 0; i < animals.length; i++){
    const animal = animals[i]

    let animalFood;

    if(animal === 'Panda'){
        animalFood = 'Planta';
    } else if (animal === 'Nutria'){
        animalFood = 'Peces';
    } else if (animal === 'Rana'){
        animalFood = 'Bichos';
    }
}

animals.forEach(getAnimalFood);

const animalFood = animals.map((animal) => {
    const food = getAnimalFood(animal)
    return food;
});

