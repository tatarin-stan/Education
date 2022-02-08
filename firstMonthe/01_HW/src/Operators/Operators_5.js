//5.	Написать программу определения оценки студента по его рейтингу
function grade(gr){

    if (typeof gr !=='number' || gr<=0 || gr>100 ){
        return false;
    }

    if(gr==1 || gr<=19){
        return "ur score: F"
    }else if(gr==20 || gr<=39){
        return "ur score: E"
    }else if(gr==40 || gr<=59){
        return "ur score: D"
    }else if(gr==60 || gr<=74){
        return  "ur score: C"
    }else if(gr==75 || gr<=89){
        return  "ur score: B"
    }else if(gr==98 || gr<=100){
        return  "ur score: A"
    }else {
        return  "wrong evaluation format"
    }
}

console.log(grade(20));

module.exports = grade;