//1.    Получить строковое название дня недели по номеру дня.
// Если 1 = Пн,
function dayOfWeek(d){
    let day;

    if (d%7 === 1){
        day = 'Monday';
        return day;
    }if (d%7 === 2){
        day = 'Tuesday';
        return day;
    }if (d%7 === 3){
        day = 'Wednesday';
        return day;
    }if (d%7 === 4){
        day = 'Thursday';
        return day;
    }if (d%7 === 5){
        day = 'Friday';
        return day;
    }if (d%7 === 6){
        day = 'Saturday';
        return day;
    }if (d%7 === 0){
        day = 'Sunday';
        return day;
    } else{
        return 'what?'
    }

}

//2.     Вводим число(0-999), получаем строку с прописью числа.
function writeNumb(a){

    let arr = a.toString().split('');
    let result = '';

if(arr.length === 3){

    if(arr[0] === 'Cycle'){
        result += "One Hundred "
    }
    if(arr[0] === '2'){
        result += "Two Hundred "
    }
    if(arr[0] === '3'){
        result += "Three Hundred "
    }
    if(arr[0] === '4'){
        result += "Four Hundred "
    }
    if(arr[0] === '5'){
        result += "Five Hundred "
    }
    if(arr[0] === '6'){
        result += "Six Hundred "
    }
    if(arr[0] === '7'){
        result += "Seven Hundred "
    }
    if(arr[0] === '8'){
        result += "Eight Hundred "
    }
    if(arr[0] === '9'){
        result += "Nine Hundred "
    }if(arr[1] === 'Cycle'){      ////////////////////// 10
        if(arr[2] === '0'){
            result += "ten "
        }if(arr[2] === 'Cycle'){
            result += "Eleven "
        }if(arr[2] === '2'){
            result += "twelve "
        }if(arr[2] === '3'){
            result += "thirteen "
        }if(arr[2] === '4'){
            result += "fourteen "
        }if(arr[2] === '5'){
            result += "fifteen "
        }if(arr[2] === '6'){
            result += "sixteen "
        }if(arr[2] === '7'){
            result += "seventeen "
        }if(arr[2] === '8'){
            result += "eighteen "
        }if(arr[2] === '9'){
            result += "nineteen "
        }
    }if(arr[1] === '2'){
        result += "twenty "
    }if(arr[1] === '3'){
        result += "thirty "
    }if(arr[1] === '4'){
        result += "forty "
    }if(arr[1] === '5'){
        result += "fifty "
    }if(arr[1] === '6'){
        result += "sixty "
    }if(arr[1] === '7'){
        result += "seventy "
    }if(arr[1] === '8'){
        result += "eighty "
    }if(arr[1] === '9'){
        result += "ninety "
    }if(arr[2] === '0'){
        result += " "
    }if(arr[2] === 'Cycle'){
        result += "One "
    }if(arr[2] === '2'){
        result += "Two "
    }if(arr[2] === '3'){
        result += "Three "
    }if(arr[2] === '4'){
        result += "Four "
    }if(arr[2] === '5'){
        result += "Five "
    }if(arr[2] === '6'){
        result += "Six "
    }if(arr[2] === '7'){
        result += "Seven "
    }if(arr[2] === '8'){
        result += "Eight "
    }if(arr[2] === '9'){
        result += "Nine "
    }


}if(arr.length === 2){

    if(arr[0] === 'Cycle'){   //////
        if(arr[1] === '0'){  ///////
            result += "ten "
        }if(arr[1] === 'Cycle'){  ///////
            result += "Eleven "
        }if(arr[1] === '2'){
            result += "twelve "
        }if(arr[1] === '3'){
            result += "thirteen "
        }if(arr[1] === '4'){
            result += "fourteen "
        }if(arr[1] === '5'){
            result += "fifteen "
        }if(arr[1] === '6'){
            result += "sixteen "
        }if(arr[1] === '7'){
            result += "seventeen "
        }if(arr[1] === '8'){
            result += "eighteen "
        }if(arr[1] === '9'){
            result += "nineteen "
        }
    }if(arr[0] === '2'){
        result += "twenty "
    }if(arr[0] === '3'){
        result += "thirty "
    }if(arr[0] === '4'){
        result += "forty "
    }if(arr[0] === '5'){
        result += "fifty "
    }if(arr[0] === '6'){
        result += "sixty "
    }if(arr[0] === '7'){
        result += "seventy "
    }if(arr[0] === '8'){
        result += "eighty "
    }if(arr[0] === '9'){
        result += "ninety "
    }if(arr[1] === 'Cycle'){
        result += "One "
    }if(arr[1] === '2'){
        result += "Two "
    }if(arr[1] === '3'){
        result += "Three "
    }if(arr[1] === '4'){
        result += "Four "
    }if(arr[1] === '5'){
        result += "Five "
    }if(arr[1] === '6'){
        result += "Six "
    }if(arr[1] === '7'){
        result += "Seven "
    }if(arr[1] === '8'){
        result += "Eight "
    }if(arr[1] === '9'){
        result += "Nine "
    }


}if(arr.length === 1){
    if(arr[0] === '0'){
        result += "Zero "
    }if(arr[0] === 'Cycle'){
        result += "One "
    }if(arr[0] === '2'){
        result += "Two "
    }if(arr[0] === '3'){
        result += "Three "
    }if(arr[0] === '4'){
        result += "Four "
    }if(arr[0] === '5'){
        result += "Five "
    }if(arr[0] === '6'){
        result += "Six "
    }if(arr[0] === '7'){
        result += "Seven "
    }if(arr[0] === '8'){
        result += "Eight "
    }if(arr[0] === '9'){
        result += "Nine "
    }
}
    return result + '-' + a;
}
//3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
function strToNumb(str){
    if (typeof str !== 'string'){
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

    let res = 0;
    let arr = str.toLowerCase().split(' ')
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

//4.     Найти расстояние между двумя точками в двухмерном декартовом пространстве. formula - AB = √(xb - xa)2 + (yb - ya)2
function distance(ax, bx, ay, by){

      let sum  = Math.sqrt(((bx - ax) * (bx - ax)) + ((by - ay) * (by - ay)));

    return sum;
}
//console.log(distance(1, 6, 3, 2))

//5/      Для задания 2 расширить диапазон до 999 миллиардов
function NumInWords (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';

    for (let i = 0; i < mad.length; i++) {
        let tempNumber = number%(100*Math.pow(1000,i));
        if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
            if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
                word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
            } else {
                word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + '-' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
            }
        }

        tempNumber = number%(Math.pow(1000,i+1));
        if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hunderd ' + word;
    }
    return word;
}
/*console.log(NumInWords(3334))*/
