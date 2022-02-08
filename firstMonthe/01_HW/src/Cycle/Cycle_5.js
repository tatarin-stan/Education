/*5.Посчитать сумму цифр заданного числа*/
function sumDigits(n) {
    if (typeof n !=='number'){
        return false;
    }

    let sum = 0;
    while (n) {
        let digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}

console.log(sumDigits(-12))

module.exports = sumDigits;