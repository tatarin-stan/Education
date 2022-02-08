// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function Max(a,b,c){

    if (typeof a !=='number' ||  typeof b !=='number'  ||  typeof c !=='number'){
        return false;
    }

    let sumPlus = +a + +b + +c; // 2 + 2 + 2 =6 (+3=9)
    let sumPult = a * b * c; // 2 * 2 * 2 =8 (+3=11)

    if(sumPlus>sumPult) {
        return (+sumPlus + 3);
    }else {
        return (+sumPult + 3)
    }
}

console.log(Max(-10,10,10))

module.exports = Max;