/*Напишите функцию, которая получает два бесконечных числа в
виде строк. Вы должны вернуть результат суммы этих двух чисел
в виде строки. Математическая работа с этими двумя числами
недоступна. Не используйте BigInt.*/

function getSum(a, b){

    if (typeof a !== 'string' || typeof b !== 'string'){
        return 'enter string value '
    }

    if ( a === "" || b === ""){
        return 'enter  value '
    }

    let arr1 = a.split('')
    let arr2 = b.split('')
    let arr3 = [];

    for (let i=0; i < arr1.length; i++) { // Если массивы равны
        arr3.push(+arr1[i] + +arr2[i]);
    }
    return arr3.join('');
}


console.log(getSum('123', '324')) // -> ‘447’
console.log(getSum('111111111111111111111111111111111111111111111111111','233333333333333333333333333333333333333333333333333')); // -> ‘3444444.......4444444’*


module.exports = getSum;
