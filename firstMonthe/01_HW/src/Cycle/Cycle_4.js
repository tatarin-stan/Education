//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factNmbr(n){
    if (typeof n !=='number' || n<=0){
        return false;
    }

    let start = 1;
    for (let i = n; i > 1; i--) {
        start *= i;
    }
    return ( n + ' = ' + start);

}

console.log(factNmbr(-10))
module.exports = factNmbr;