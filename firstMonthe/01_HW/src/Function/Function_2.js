//2.     Вводим число(0-999), получаем строку с прописью числа.

function writeNumb(a){

    if (typeof a !=='number' || a<=0 || a>999){
        return false;
    }

    let arr = a.toString().split('');
    let result = '';

    if(arr.length === 3){

        if(arr[0] === '1'){
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
        }if(arr[1] === ' 1'){      ////////////////////// 10
            if(arr[2] === '0'){
                result += "ten "
            }if(arr[2] === ' 1'){
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
        }if(arr[2] === ' 1'){
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

        if(arr[0] === ' 1'){   //////
            if(arr[1] === '0'){  ///////
                result += "ten "
            }if(arr[1] === ' 1'){  ///////
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
        }if(arr[1] === ' 1'){
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
        }if(arr[0] === ' 1'){
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
    return result + '- ' + a;
}

console.log(writeNumb(128))

module.exports = writeNumb;