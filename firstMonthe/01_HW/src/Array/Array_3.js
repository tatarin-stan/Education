// 3.	Найти индекс минимального элемента массива
function getMinIndex(array){

    if (typeof array !=='object' || array.length<=0){
        return false;
    }

    let minIndex =  findIndexOfMin(array);

    function findIndexOfMin(arr) {
        let minIndex = 0;
        let min = array[0];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
    return minIndex;
}

console.log(getMinIndex([2, 5, 6, -7, -12, 15, 0, 3, -8, 9]))
module.exports = getMinIndex;