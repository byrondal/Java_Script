var age = 30;
var canParticipate = false;

if (age < 30) {
  canParticipate = true;
}

console.log(`Puede participar el usuario? ${canParticipate}`);

//------Segundo ejercicio----------

var yearsToRenew = 0;
var driverAge = 19; //si vamos cambiando este numero va cambiando el resultado

// 18 o mas años, y 50 o menos => 10
//más de 50 y menos o igual a 75 => 5
//más de 75 años => 1

if (driverAge >= 18 && driverAge <= 50) {
  yearsToRenew = 10;
}

if (driverAge > 50 && driverAge <= 75) { //el doble "&&" significa "y"
  yearsToRenew = 5;
}

if (driverAge > 75) {
  yearsToRenew = 1;
}

console.log(`Se tiene que renovar el carnet cada ${yearsToRenew} años`);

//--------Tercer ejercicio---------
var myName = "Miguel";

if (myName === "Miguel") {
  console.log(`Eres un alumno`);
} else {
  console.log(`Eres el profe`); //este es el caso del sino de Pseudocodigo
}

//--------Cuarto ejercicio---------

var time = 1000; //los tiempos siempre en milisegundos
var record = "";

if (time < 12000) {
  record = "World Record";
}

if (time < 10000) {
  record = "Olympic Record";
}

if (time < 8000) {
  record = "Personal Best";
}

console.log(`El Record es: ${record}`); //cuidado con el orden de las condiciones, por eso mejor utilizar el If----Else

if (time < 8000) {
  record = "World Record";
} else if (time < 10000) {
  record = "Olympic Record";
} else if (time < 12000) {
  record = "Personal Best";
} else {
  record = "No Record";
}

console.log(`El Record es: ${record}`);


var city = 'Madrid';
var hasCar = false;


//OR operator
//AND operator
if((city === 'Madrid' || city === 'Barcelona') && hasCar === false){
    console.log('Va en metro!');
}

if(city === 'Madrid' && hasCar === true){
    console.log('Puede ir en coche o metro');
}
