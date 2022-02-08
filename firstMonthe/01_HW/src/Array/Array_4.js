//4.	Найти индекс максимального элемента массива
function getMinIndex(arr){

    if (typeof arr !=='object' || arr.length<=0){
        return false;
    }

    let maxIndex =  findIndexOfMax(arr);

    function findIndexOfMax(arr) {
        let maxIndex = 0;
        let max = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
                maxIndex = i;
            }
        }
        return maxIndex;
    }
    return maxIndex;
}

console.log(getMinIndex([2, 5, 6, -7, -12, 15, 0, 3, -8, 9]))
module.exports = getMinIndex;