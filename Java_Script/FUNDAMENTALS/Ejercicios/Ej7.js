/*Crea un bucle "for" que vaya desde 0 a 9 y muéstralo por consola*/
for(let i = 0; i < 10; i++){
    console.log(i);
}

/*Crea un bucle "for" que vaya desde 0 a 9 y muéstralo por consola solo cuando el resto del número dividido entre 2 sea 0*/

for(let i = 0; i < 10; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}


/*Crea un bucle para conseguir dormir contando ovejas*/

for(let i = 0; i < 10; i++){
    if(i !== 9){
        console.log('Intentando dormir')
    } else {
        console.log('Dormido!')
    }
}


