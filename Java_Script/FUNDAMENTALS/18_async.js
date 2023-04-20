const myName = 'Miguel';
console.log(`Mi nombre es: ${myName}`);



new Promise(() => {
    console.log('Promesa ejecutándose');
})

console.log('Este código se ejecuta antes que la Promise!');

const getAmountInBank = () => {
    const promise = new Promise((resolve, reject) => {
        resolve(1000000);
    });
    return promise;
};

getAmountInBank().then((amount) => {
    console.log(`La cantidad que tenemos en el banco es: ${amount}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
});

