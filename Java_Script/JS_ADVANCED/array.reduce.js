/*es un método complicado, se enseña porque lo veremos por ahí es como un método comodín*/

const numbers = [1, 2, 3, 4, 5]

let sum = 0;

numbers.forEach((number) =>{
    sum += number;
})


numbers.reduce((acc, next) =>{
    console.log(acc, next);

    return acc + next;
});


console.log(sum);



