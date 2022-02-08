//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(number) {
    let result;

    if (!number || number<0 ||  typeof number !== 'number'){
        return 'incorrect input'
    }

    if (number < 10 && number >= 0 ){   // Все числа меньше 10
        number = 10;
    }

    for (let i = number+1;;i++){
        i = String(i);
        if (i === i.split('').reverse().join('')){
            result = i;
            break;
        }
    }

    return result;
}
console.log(getNextPalindrome(99));
/*getNextPalindrome(7) // returns 11
getNextPalindrome(99) //returns 101
getNextPalindrome(132) // returns 141
getNextPalindrome(888) // returns 898
getNextPalindrome(999) // returns 1001*/

module.exports = getNextPalindrome;



