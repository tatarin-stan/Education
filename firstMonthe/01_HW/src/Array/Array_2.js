// 2.	Найти максимальный элемент массива
function getMaxElement(array){

    if (typeof array !=='object' || array.length<=0){
        return false;
    }

    let max = getMaxValue(array);

    function getMaxValue(array){
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
    return max;
}

console.log(getMaxElement([2, 5, 6, -7, -12, 16, 0, 3, -8, 9]))
module.exports = getMaxElement;