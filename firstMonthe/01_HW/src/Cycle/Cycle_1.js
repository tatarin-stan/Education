//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumEveNmb() {

    let sum = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum;
}

console.log(sumEveNmb())

module.exports = sumEveNmb;