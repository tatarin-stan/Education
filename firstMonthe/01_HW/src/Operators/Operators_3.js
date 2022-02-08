//  3.	Найти суммы только положительных из трех чисел
function positiveOfThree(a,b,c){

    if (typeof a !=='number' ||  typeof b !=='number' ||  typeof c !=='number'){
        return false;
    }

    if(a > 0 && b > 0 && c > 0) {
        return (+a + +b + +c)
    }else if (a < 0 && b > 0 && c > 0) {
        return (+b + +c)
    }else if (a >0 && b < 0 && c > 0) {
        return (+a + +c)
    }else if (a > 8 && b > 0 &&c < 0) {
        return (+a + +b)
    }else if (a > 0 && b < 0 && c <0) {
        return (+a)
    }else if (a < 0 && b > 0 && c< 0) {
        return (+b)
    }else if (a < 0 && b < 0 && c > 0) {
        return (+c)
    }else {
        return 'Nope!';
    }
}

console.log(positiveOfThree(12,10,-10))
module.exports = positiveOfThree;