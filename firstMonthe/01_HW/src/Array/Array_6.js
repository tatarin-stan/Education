//6.	Сделать реверс массива (массив в обратном направлении)
function reverse(arr) {

    if (typeof arr !=='object' || arr.length<=0){
        return false;
    }

    let newArr = [];
    for (let i = arr.length; i >= 0; i--) {
        let index = arr.length - i;
        newArr[i] = arr[index];
    }

    return newArr;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
module.exports = reverse;