
var trueVar = true;

console.log(trueVar);

trueVar = false;

console.log(trueVar);


console.log('Igual doble solo numbers: '(5 == 5)); //se utilizara siempre el triple igual
console.log('Igual doble con string y number: ' + ('5' == 5));

console.log('Igual triple solo numbers: ' + (5 === 5));
console.log('Igual triple con string y numbers: ' + ('5' === 5));

console.log('Es 2 mayor que 3? ' + (2 > 3));
console.log('Es 3 mayor que 2? ' + (3 > 2));

console.log('Es 3 mayor o igual que 3? ' + (3 >= 3));

var isSameName = 'juan' === 'Juan'; 
console.log('Son el mismo nombre? ' + isSameName);

//Truthy : todas las variables que tengan un valor 

console.log('Es 2 truthy?' + Boolean(2));
console.log('Es PMBA truthz?' + Boolean('PMBA'));


//Falsy

console.log('Es 0 falsy?', Boolean(0));
console.log('Es un string vacio falsy?', Boolean(''));

var surname;
console.log('Es surname falsy?', Boolean(surname));

surname = null
console.log('Es surname falsy?', Boolean(surname));


