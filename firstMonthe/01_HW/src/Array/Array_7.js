//7.	Посчитать количество нечетных элементов массива
function sumOddElement(arr){

    if (typeof arr !=='object' || arr.length<=0){
        return false;
    }

    let sumIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sumIndex = sumIndex + 1;
        }
    }
    return sumIndex;
}

console.log(sumOddElement([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]))
module.exports = sumOddElement;