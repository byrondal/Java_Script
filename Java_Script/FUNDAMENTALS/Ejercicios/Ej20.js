/*Mixed For....of e includes*/

const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'},
    {id: 51, name: 'El gato felix'}
];

for(const toy of toys){
    if(toy.name.includes('gato')){
        const index = toys.indexOf(toy); /*Hago este paso para obtener la posición del valor y aplicarlo luego en el splice*/
        toys.splice(index, 1);
    }
}

console.log(toys);

