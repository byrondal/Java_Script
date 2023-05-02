




/*fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((response) => {
        console.log('Respuesta: ', response);
    })
    .catch((err) =>{
        console.log('Error', err);
    } );*/


/*console.log('> Ya hemos pedido el pokemon a la API');*/

const main = async () => {
    console.log('Pedimos un pokemon a la API');

    try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await res.json();
    console.log('Respuesta', response);
    } catch (err){
        console.log('Error', err);
    }
    console.log('Ya hemos pedido un pokemon a la API');
};

main();

