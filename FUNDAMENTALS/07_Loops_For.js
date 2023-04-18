//Loop "for"
//i++ = "i = i + 1"
for(var i = 0; i < 5; i = i + 1){
console.log(`El valor de i es: ${i}`);
}

//for(VALOR INICIAL; COMPARACIÓN; OPERACIÓN TRAS CADA LOOP){
//    CONTENIDO
//}
//i-- = " i -1"
//for(var j = 10; j >= 0; j--){
//    console.log(`El valor de j es: ${h}`);
//}

//for(var x = 10; x >= 0; x = x -3){
//    console.log(`El valor de x es: ${x}`);
//}

//Shorcuts mas comunes
// i = i + 1
// i+= 1;
// i++;

// i = i - 1;
// i-= 1;
// i--;


var timesRepeated = 0
var sentence = 'La programación me gusta'
console.log(sentence[1]) //nos muestra lo que hay en esta posición
console.log(sentence.length)

for(var i = 0; i < sentence.length; i++ ){
    if(sentence[i] === 'a') {
    timesRepeated += 1;
    }
}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);