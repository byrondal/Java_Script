/*Función buscador de nombres*/

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(param) {
    let nameUsed = 'Miguel';
    let namePosition = 0;
    let nameTrueOrFalse = false;
    for(let i = 0; i < param.length; i++) {
        if(param.indexOf(nameUsed) > -1){
            nameTrueOrFalse = true;
            namePosition = param.indexOf(nameUsed) + 1;
        } else {
            nameTrueOrFalse = false;
        }
    }
    return console.log(`El nombre ${nameUsed} se encuentra en el array? ${nameTrueOrFalse} 
    y está en la posción ${namePosition}`)
}

finderName(nameFinder);

