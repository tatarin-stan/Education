// 1.   Найти минимальный элемент массива
function getMinElement(){
let array = [2, 5, 6, -7, -12, 15, 0, 3, -8, 9];
let min = getMinValue(array);

function getMinValue(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
return min;
}
// 2.	Найти максимальный элемент массива
function getMaxElement(){
let array = [2, 5, 6, -7, -12, 16, 0, 3, -8, 9];
let max = getMaxValue(array);

function getMaxValue(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}
    return max;
}
// 3.	Найти индекс минимального элемента массива
function getMinIndex(){
let arr = [2, 5, 6, -7, -12, 15, 0, 3, -8, 9];
let minIndex =  findIndexOfMin(arr);

function findIndexOfMin(arr) {
    let minIndex = 0;
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
return minIndex;
}
//4.	Найти индекс максимального элемента массива
function getMinIndex(){
    let arr = [2, 5, 6, -7, -12, 15, 0, 3, -8, 9];
    let maxIndex =  findIndexOfMax(arr);

    function findIndexOfMax(arr) {
        let maxIndex = 0;
        let max = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
                maxIndex = i;
            }
        }
        return maxIndex;
    }
    return maxIndex;
}


//5.	Посчитать сумму элементов массива с нечетными индексами
function getSumOddIndex(){
    let arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let sumIndex =  findIndexOfMinMax(arr);

    function findIndexOfMinMax(arr) {
        let sumIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (i %2 !== 0) {
                sumIndex = sumIndex + arr[i];
            }
        }
        return sumIndex;
    }
    return sumIndex;
}

//6.	Сделать реверс массива (массив в обратном направлении)
function reverse() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let newArr = [];
    for (let i = arr.length; i > 0; i--) {
        let index = arr.length - i;
        newArr[i] = arr[index];
    }

    return newArr;
}

//7.	Посчитать количество нечетных элементов массива
function sumOddElement(){
let arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
let sumIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        sumIndex = sumIndex + 1;
    }
}
return sumIndex;
}

//8.	Поменять местами первую и вторую половину массива, например, для массива Cycle 2 3 4, результат 3 4 1 2
function halfRev(arr) {

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

//9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)

function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function selectSort(arr){
   for (let j = 0; j< arr.length; j++){
    let max = -Infinity;
    let index = null;

    for (i = 0; i < arr.length - j;i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }

    let buff = arr[arr.length - 1 - j]
    arr[arr.length - 1 - j] = max
    arr[index] = buff
   }
    return arr;
}

function insertSort(arr){

for(let i = 1; i < arr.length; i++) {
    let j = i;
    let index = arr[i];
    while(index < arr[j - 1]) {
        arr[j] = arr[j - 1];
        j--;
    }
    arr[j] = index;
}
return arr;
}

//10.	Отсортировать массив (Quick, Merge, Shell, Heap)
function quickSort(arr) {
    if (arr.length < 1) {
        return false;
    }

    const index = Math.floor(Math.random() * arr.length)
    const currentItem = arr[index]

    const more = []
    const less = []


    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            continue
        }
        if (arr[i] > currentItem) {
            more.push(arr[i])
        } else {
            less.push(arr[i])
        }
    }

    let result = less.concat(currentItem, more);
    return result;
}

function mergeSort(arr) {
    if (arr.length>1)
    {
        let mid = Math.floor(arr.length/2),
            lefthalf = arr.slice(0,mid),
            righthalf = arr.slice(mid);
            mergeSort(lefthalf)
            mergeSort(righthalf)

        let i = j = k = 0
        while (i<lefthalf.length && j<righthalf.length)
        {
            if (lefthalf[i]<righthalf[j])
            {
                arr[k]=lefthalf[i]
                i++;
            }
            else
            {
                arr[k]=righthalf[j]
                j++
            }
            k++
        }
        while (i<lefthalf.length)
        {
            arr[k]=lefthalf[i]
            i++
            k++
        }
        while( j<righthalf.length)
        {
            arr[k]=righthalf[j]
            j++
            k++
        }
    }
    return arr
}

function shellSort(arr) {
    let n = arr.length;

    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)){
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];

            let j;
            for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
                arr[j] = arr[j-gap];
            }
            arr[j] = temp;
        }
    }

    return arr;
}

function heapSort() {
   return 'no'
}

console.log(heapSort());



