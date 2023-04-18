function getPriceByCity (city){ //se denomina argumento donde el usuario pone un input
    //var city = 'Madrid';
    var price = 0;

    if (city === 'Madrid'){
        price = 10;
    } else if(city === 'Valencia'){
        price = 5;
    } else{
        price = 1;
    }
    return price;
}

var priceInMadrid = getPriceByCity('Madrid');
var priceInValencia = getPriceByCity('Valencia');
var priceInCadiz = getPriceByCity('Cadiz');
console.log(`El precio en Madrid es : ${priceInMadrid}`);
console.log(`El precio en Valencia es : ${priceInValencia}`);
console.log(`El precio en Cádiz es : ${priceInCadiz}`);

