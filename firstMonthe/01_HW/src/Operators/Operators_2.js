//2.	Определить какой четверти принадлежит точка с координатами (х,у)
function quarter(a,b) {

    if (typeof a !=='number' || typeof b !=='number'){
        return false;
    }

    if (a > 0 && b > 0) {
        return "точка принадлежит 1-й четверти "
    } else if (a < 0 && b > 0) {
        return "точка принадлежит 2-й четверти "
    } else if (a < 0 && b < 0) {
        return "точка принадлежит 3-й четверти "
    } else if (a > 0 && b < 0) {
        return "точка принадлежит 4-й четверти "
    }

}

console.log(quarter(-12,-15))

module.exports = quarter;