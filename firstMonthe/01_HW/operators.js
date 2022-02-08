// 1.	Если а – четное посчитать а*б, иначе а+б
function SumAandB(){

let a = 11;
let b = 15
if(a % 2 == 0 ){
   return  console.log(+a * +b);
}else {
    return console.log(+a + +b);
}

}
//2.	Определить какой четверти принадлежит точка с координатами (х,у)
function quarter() {

    let a = 12;
    let b = 10;

    if (a > 0 && b > 0) {
        return console.log("точка принадлежит Cycle-й четверти ");
    } else if (a < 0 && b > 0) {
        return console.log("точка принадлежит 2-й четверти ")
    } else if (a < 0 && b < 0) {
        return console.log("точка принадлежит 3-й четверти ")
    } else if (a > 0 && b < 0) {
        return console.log("точка принадлежит 4-й четверти ")
    }

}
//  3.	Найти суммы только положительных из трех чисел
function positiveOfThree(){

let a = 12;
let b = 10;
let c = -10;

if(a > 0 && b > 0 && c > 0) {
    return console.log (+a + +b + +c)
}else if (a < 0 && b > 0 && c > 0) {
    return console.log (+b + +c)
}else if (a >0 && b < 0 && c > 0) {
    return console.log (+a + +c)
}else if (a > 8 && b > 0 &&c < 0) {
    return console.log (+a + +b)
}else if (a > 0 && b < 0 && c <0) {
    return console.log (+a)
}else if (a < 0 && b > 0 && c< 0) {
    return console.log (+b)
}else if (a < 0 && b < 0 && c > 0) {
    return console.log (+c)
}else {
    return console.log ('Nope! ')
}

}
// 4.	Посчитать выражение (макс(а*б*с, а+б+с))+3
function Max(){

    let a = 10;
    let b = 10;
    let c = 10;

    let sumPlus = +a + +b + +c; // 2 + 2 + 2 =6 (+3=9)
    let sumPult = a * b * c; // 2 * 2 * 2 =8 (+3=11)

    if(sumPlus>sumPult) {
        return console.log (+sumPlus + 3);
    }else {
        return console.log (+sumPult + 3)
        }

}
//5.	Написать программу определения оценки студента по его рейтингу
function grade(){
    
    let gr = 55;

    if(gr==1 || gr<=19){
        return console.log ("ur score: F")
    }else if(gr==20 || gr<=39){
        return console.log ("ur score: E")
    }else if(gr==40 || gr<=59){
        return console.log ("ur score: D")
    }else if(gr==60 || gr<=74){
        return console.log ("ur score: C")
    }else if(gr==75 || gr<=89){
        return console.log ("ur score: B")
    }else if(gr==98 || gr<=100){
        return console.log ("ur score: A")
    }else {
        return console.log ("wrong evaluation format")
    }
}
