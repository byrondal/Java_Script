/*Calcular promedio de strings*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param){
    let paramNumberLength = 0;
    let paramWordLength = 0;
    for(let i = 0; i < param.length; i++){
        if(typeof param[i] === "string"){
           paramWordLength = param[i].length + paramWordLength;
        } else if(typeof param[i] === "number"){
            paramNumberLength = param[i] + paramNumberLength;
    }
}
    return console.log(`La suma de los numeros introducidos es: ${paramNumberLength} y la suma de la longitud de las
    palabras introducidas es: ${paramWordLength}`);
}

averageWord(mixedElements);

