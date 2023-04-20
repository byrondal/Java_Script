var count = 0;

while(count <=10) {
    console.log(`La cuenta va por ${count}`);

    count++;
}

var negativeCount = 10;

//Cuenta regresiva de 10 a 0.
while(negativeCount >= 0) {
    console.log(`La cuenta negativa va por ${negativeCount}`);

    negativeCount--;
}

var timesRepeated = 0
var sentence = 'La programación me gusta'
var i = 0
//transformación de un for a un while.
while(i < sentence.length){
    if(sentence[i] === 'a') {
        timesRepeated += 1;
        }
}

//for(var i = 0; i < sentence.length; i++ ){
//    if(sentence[i] === 'a') {
//    timesRepeated += 1;
//    }
//}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);

 
    