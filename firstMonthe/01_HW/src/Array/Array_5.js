//5.	Посчитать сумму элементов массива с нечетными индексами
function getSumOddIndex(arr){

    if (typeof arr !=='object' || arr.length<=0){
        return false;
    }

    let sumIndex =  findIndexOfMinMax(arr);

    function findIndexOfMinMax(arr) {
        let sumIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (i %2 !== 0) {
                sumIndex = sumIndex + arr[i];
            }
        }
        return sumIndex;
    }
    return sumIndex;
}

console.log(getSumOddIndex([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]))
module.exports = getSumOddIndex;