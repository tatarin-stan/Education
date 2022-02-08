//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function sqrt (value){
    if (typeof value !=='number' || value<=0){
        return false;
    }

    for (let i = 0; i <= value; i++) {
        if (i * i === value) return i;
    }

    return 'this number has no integer root';
}

console.log(sqrt(9))
module.exports = sqrt;