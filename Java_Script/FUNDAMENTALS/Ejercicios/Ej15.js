/*Contador de repeticiones*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(param) {
    let wordCount = {};
    for(let i = 0; i < param.length; i++) {
        if(wordCount[param[i]] === undefined){
            wordCount[param[i]] = 1;
        } else {
            wordCount[param[i]] += 1;
        }
    }
    return console.log(wordCount);
}

repeatCounter(counterWords);


