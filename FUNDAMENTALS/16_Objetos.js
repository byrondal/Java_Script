const person = {
    name: 'Miguel',
    surname: 'Fernández',
};

//const personName['name'] = person['name'];
//console.log(`El nombre es: ${personName}`);
//person['age'] = 30; //añade una propiedad
//onsole.log(`La persona tiene ${person.age} años`);

//delete person['city']; //borra una propiedad

//ejemplo de claves dinámicas
function getKey(object, key){
    return object[key];
}

const dynamicName = getKey(person, 'name');
const dynamicSurname = getKey(person, 'surname');
console.log(`La clave dinamica name vale: ${dynamicName}`);
console.log(`Las claves dinamicas valen: ${dynamicName} ${dynamicSurname}`);


