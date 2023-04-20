function sum (num1, num2){
    return num1 + num2;
}

var totalSum = sum(4, 6);
var totalSum2 = sum(1, 2);
var totalSum3 = sum(2, 8);
console.log(`Lasuma total vale: ${totalSum} ${totalSum2} ${totalSum3}`)

console.log(------------);

//Funcion anonima
var substract = function(a, b){
    return a - b;
};

console.log(`La resta vale: ${substract(6, 2)}`)

//Funcion Flecha (Arrow function)
//var multiply = function(a, b){ //seria var multiply = (a, b) =>
//    return a * b;
//}

//IMPLICIT RETURN
var multiply = (a, b) => a * b;
    

console.log(`La multiplicacion vale: ${multiply(6, 2)}`)
