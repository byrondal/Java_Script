var myName = 'Miguel'; //el problema es que esta variable tiene un scope global y se puede cambiar el valor constantemente

function changeMyName(newName){
    myName = newName;
}

//la recomendación desde este punto es utilizar constantes

const myName = 'Miguel' //nunca se podrá manipular la variable myName.
let myName = 'Miguel' //es como usar "var". lo usamos siempre que una variable se pueda reasignar de nuevo, sino, usaremos "const"

if (true){
    var i = 1;
}

console.log(i);

