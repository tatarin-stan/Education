//4.     Найти расстояние между двумя точками в двухмерном декартовом пространстве. formula - AB = √(xb - xa)2 + (yb - ya)2
function distance(ax, bx, ay, by){

    if (typeof ax !=='number' || typeof bx !=='number' || typeof ay !=='number' || typeof by !=='number'){
        return false;
    }


    let   left = ((bx - ax) * (bx - ax))
    let   right = ((by - ay) * (by - ay));
    let   sum  = left + right;
    let   sum2 = Math.sqrt(sum)

    return sum2;
}

console.log(distance(-1, 6, 3, 2))
module.exports = distance;