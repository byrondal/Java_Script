var price = 0;
var city = 'Valencia';

//if(city === 'Valencia'){
//    price = 10;
//} else if(city === 'Madrid'){
//    price = 15;
//}


//El Switch se utiliza para cosas simples, no para código muy largo.
switch(city){
    case 'Valencia':
        price = 10;
        break;
    case 'Madrid':
        price =15;
        break;
    case 'Barcelona':
        price = 20;
        break;
    default:
        price = 5;
}

console.log(`El precio del metro para ${city} es de ${price} euros`);


