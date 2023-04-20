var name = "Miguel";
var surname = "Fernández";

var fullName = name + " " + surname; //las comillas son para el espacio

var firstIngredient = "leche";
var secondIngredient = "arroz";
var thirdIngredient = "limón";
var fourthIngredient = "canela";

var recipe =
  "Lista de ingredientes: " +
  firstIngredient +
  ", " +
  secondIngredient +
  ", " +
  thirdIngredient +
  "y " +
  fourthIngredient + '.';

  console.log(recipe);

  var recipeInterpolated = `Lista de ingredientes: 
  - ${firstIngredient}.
  - ${secondIngredient}.
  - ${thirdIngredient}.
  - ${fourthIngredient}.
  `;
  console.log('-------------------------');
//Esta es una variante para que queda más claro los datos al mostrarlos por consola.
  console.log(recipeInterpolated);

console.log('--------------------------');

  var car = 'Fiat';

  var myCar = `Mi coche es un ${car.toUpperCase()}`; //nos convierte el texto en mayúsculas "toUpperCase"

  console.log(myCar);

console.log('--------------------');

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLowerCase()}`; //nos convierte el texto en minúsculas "toLowerCase"

console.log(myDog);

console.log('---------------------');

var computerDescription = '   Ordenador muy potente con mucha RAM. ';

console.log(computerDescription.trim()); // .trim limpia los espacios que pueda meter por error el usuario en el texto.

console.log('------------------------');

var school = 'The PMBA';
var schoolName = school.slice(4); // .slice nos muestra lo que hay desde la posición 4 en adelante (en este caso no he puesto el final.


console.log(schoolName);


