//1.    Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
//  Правила:
//      -Яйца варить 5 минут
//      -Вместительность емкости не более 5 яиц одновременно

function getCookingTime(eggsAmount) {

    if (!eggsAmount || 0 === eggsAmount.length || typeof eggsAmount !== 'number'){
        return false;
    }

    let a = eggsAmount/5
    let c = Math.ceil(a);
    let b = c * 5

        return (b + ' minutes');


}
console.log(getCookingTime(0));// 15 minutes

module.exports = getCookingTime;


