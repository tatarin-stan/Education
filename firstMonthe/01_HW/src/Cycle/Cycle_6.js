/*6.Вывести число, которое является зеркальным отображением*/
function mirrorEffect(n) {
    if (typeof n !=='number' || n<=0){
        return false;
    }

    let sumMirr = '';
    while (n) {
        let digit = n % 10;
        sumMirr += digit;
        n = (n - digit) / 10;
    }
    return sumMirr;
}

console.log(mirrorEffect(152))

module.exports = mirrorEffect;