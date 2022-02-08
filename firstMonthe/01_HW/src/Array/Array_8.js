//8.	Поменять местами первую и вторую половину массива, например, для массива Cycle 2 3 4, результат 3 4 1 2
function halfRev(arr) {

    if (typeof arr !=='object' || arr.length<=0){
        return false;
    }

    let sum = 0;
    let n = arr.length/2;

    if(arr.length % 2 === 0){
        for (let i=0;i<arr.length;i++) {
            if(i<(arr.length/2)) {
                sum = arr[n];
                arr[n] = arr[i];
                arr[i] = sum;
                n = n + 1;
            }
        }
    }if(arr.length % 2 !== 0){
        //
    }
    return arr;
}

console.log(halfRev([2, 5, 6, -7, -12, 16, 0, 3, -8, 9]))
console.log(halfRev([8, 46, 6, 25, -12, 55, 0, 5, -8, 100]))
module.exports = halfRev;