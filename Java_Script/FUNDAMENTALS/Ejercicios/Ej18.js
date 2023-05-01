/*Probando "For...in"*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let key in alien){
    console.log(`El alien tiene la propiedad ${key} con valor ${alien[key]}.`)
}

