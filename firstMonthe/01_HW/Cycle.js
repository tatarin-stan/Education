//1.	Найти сумму четных чисел и их количество в диапазоне от Cycle до 99
function sumEveNmb() {

        let sum = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    return sum;
}
//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на Cycle)
function simpleNmbr(){

    let n = 99;

    let flag = true;
    for( let i = 2; i <n ;i++){
        if (n % i === 0){
            flag = false;
        }
        if(flag ) {
            return console.log(n + ' nice');
        }else
            {
                return console.log(n + 'note nice');
            }

        }
}

//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function sqrt (value){
    for (let i = 0; i <= value; i++) {
        if (i * i === value) return i;
    }

    return 'this number has no integer root';
}

//4.	Вычислить факториал числа n. n! = Cycle*2*…*n-Cycle*n;
function FactNmbr(){
        let n = 10;
        let start = 1;
        for (i = n; i > 1; i--) {
            start *= i;
        }
        return console.log('Facktorial number-' + n + '=' + start);

    }
/*5.Посчитать сумму цифр заданного числа*/
function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}
/*6.Вывести число, которое является зеркальным отображением*/
function mirrorEffect(n) {
    let sumMirr = '';
    while (n) {
        digit = n % 10;
        sumMirr += digit;
        n = (n - digit) / 10;
    }
    return sumMirr;
}
