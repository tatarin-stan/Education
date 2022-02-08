//3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function strToNumb(str){
    let res = 0;


    if (typeof str !== 'string' || str === ''){
        return false;
    }

    let arr = str.toLowerCase().split(' ')

    if (arr.length > 3){
        return false;
    }

    const value = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        onehundred: 100,
        twohundred: 200,
        threehundred: 300,
        fourhundred: 400,
        fivehundred: 500,
        sixhundred: 600,
        sevenhundred: 700,
        eighthundred: 800,
        ninehundred: 900,
    };


    if (arr.length === 1){
        res += value[str];
    }
    if (arr.length === 2){
        res += value[arr[0]] + value[arr[1]]
    }
    if (arr.length === 3){
        res += value[arr[0]] + value[arr[1]] + value[arr[2]]
    }
    return res;
}

//console.log(strToNumb('sixhundred thirty nine'));

module.exports = strToNumb;