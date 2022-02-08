// 1.   Найти минимальный элемент массива
function getMinElement(array){

    if (typeof array !=='object' || array.length<=0){
        return false;
    }

    let min = getMinValue(array);

    function getMinValue(array){
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
    return min;
}

console.log(getMinElement('sdsr'))
module.exports = getMinElement;