/* Buscar la palabra más larga*/

function findLongestWord(param) {
    let longestWord = param[0];

    for(let i = 0; i < (param.length - 1); i++) {
        if(param[i].length > longestWord.length) {
            longestWord = param[i];
        } else if (param[i].length = longestWord.length) {
            longestWord = longestWord;
        }
    }
    return console.log(longestWord);
}

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

findLongestWord(avengers);


