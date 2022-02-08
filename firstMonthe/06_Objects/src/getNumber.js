//  2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array) {
    let even = [];
    let odd = [];

    if (!array || 0 === array.length){
        return false;
    }

    for( let i=0;i<array.length;i++){
        if (array[i]%2 === 0 ){
            even.push(array[i])
        }
    }

    for( let i=0;i<array.length;i++){
        if (array[i]%2 > 0 ){
            odd.push(array[i])
        }
    }

    if (even.length > 1){
        return odd;
    }if (odd.length > 1){
        return even;
    }

}

console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 14])); // 13
console.log(getNumber([113, 5, 7, 9, 15, 19, 777, -15, -11,4, 9, 23, -17])); //returns 4
console.log(getNumber()); //false

module.exports = getNumber;

