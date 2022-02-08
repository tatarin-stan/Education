//1.    Получить строковое название дня недели по номеру дня.
// Если 1 = Пн,
function dayOfWeek(d){

    if (typeof d !=='number' || d<=0|| d>7 ){
        return false;
    }

    if (d%7 === 1){
        return 'Monday';
    }if (d%7 === 2){
        return 'Tuesday';
    }if (d%7 === 3){
        return 'Wednesday';
    }if (d%7 === 4){
        return 'Thursday';
    }if (d%7 === 5){
        return 'Friday';
    }if (d%7 === 6){
        return 'Saturday';
    }if (d%7 === 0){
        return 'Sunday';
    }

    return false;
}

console.log(dayOfWeek(2));

module.exports = dayOfWeek;