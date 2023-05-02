const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

let count = 0;
for(let i = 0; i <numbers.length; i++){
    if(numbers[i] > 3){
        count += 1;
    }
}

numbers.forEach((number, index) => {
    if(number > 3){
        count += 1;
    }
});

let evenNumbers =[];
let oddNumbers = [];

for(let i = 0; i <numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

const setNumberOddOrEven = () => {
    number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number);
}

numbers.forEach(setNumberOddOrEven); /*un forEach combinado con una función*/

