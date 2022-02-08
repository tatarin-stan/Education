//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на Cycle)
function simpleNmbr(n){

    if (typeof n !=='number' || n<=0){
        return false;
    }

    let flag = true;
    for( let i = 2; i <n ;i++){
        if (n % i === 0){
            flag = false;
        }
        if(flag ) {
            return (n + ' naturale');
        }else
        {
            return (n + ' note naturale');
        }

    }
}

console.log(simpleNmbr(12))

module.exports = simpleNmbr;