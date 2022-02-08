// 1.	Если а – четное посчитать а*б, иначе а+б
function SumAandB(a,b){

    if (typeof a !=='number' || a<=0 || typeof b !=='number' || b<=0 ){
        return false;
    }

    if(a % 2 === 0 ){
        return  +a * +b;
    }else {
        return +a + +b;
    }
}
console.log(SumAandB(11,15))
module.exports = SumAandB;