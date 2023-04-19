

function positiveSum(array){
    for(let i = 0, sum = 0; i < array.length; i++){
        if(array[i] > 0){
            sum = sum + array[i];
        }
    }
    return sum;
}