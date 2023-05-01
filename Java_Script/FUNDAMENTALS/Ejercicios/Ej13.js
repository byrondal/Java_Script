/*Función eliminar elementos duplicados*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(param){
    let newArray = [];
    for(let i = 0; i < param.length; i++){
        if (newArray.indexOf(param[i]) === -1) {
            newArray.push(param[i]);
        }
    }
    return console.log(newArray);
}

removeDuplicates(duplicates);

