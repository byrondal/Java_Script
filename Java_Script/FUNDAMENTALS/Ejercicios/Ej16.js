/* Usa includes*/

const products = [
    'Camiseta de Pokemon',
    'Pantalón conquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinturón de Orión',
    'AC/DC Camiseta'
]
let wordRepeat = 0;

for(let i = 0; i < products.length; i++){
    if(products[i].includes('Camiseta')) {
        wordRepeat = wordRepeat + 1;
        console.log(products[i]);
    }
}

console.log(wordRepeat);


