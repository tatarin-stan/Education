let temp = '';
let m = '';
let flag;
let s = 5

function validation(str){
    let nmbr = document.getElementById('test').innerHTML

    let b = nmbr.split('');

    if (   b[b.length-1].includes('+') || b[b.length-1].includes('-') || b[b.length-1].includes('x') || b[b.length-1].includes('/') ){
        b.splice(b.length-1, 1, '-')
        str = b.join('')
        return str;
    }

    return false;

}

function start(str){
    let nmbr = document.getElementById('test').innerHTML.split('')
    console.log(nmbr)
    console.log(nmbr[nmbr.length-1])

    if (nmbr[nmbr.length-1] === '+'){
        return
    }

    document.getElementById('test').innerHTML  += str;

}

function clean(){
    document.getElementById('test').innerHTML  = '';
    window.location.reload();
}

function cleanOne(){
    let exp =  document.getElementById('test').innerHTML
    document.getElementById('test').innerHTML = exp.substring(0, exp.length-1)
}

function numbMultiplyBy(){
    temp = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML += '√'
}

function equals(){
    let eq =  document.getElementById('test').innerHTML;

    if (eq.includes('^')) {
        let b = eq.split('^')
        document.getElementById('test').innerHTML = Math.pow(temp, b[1]);
        temp = '';
    }if (eq.includes('√')) {
        let b = eq.split('√')
        document.getElementById('test').innerHTML = (temp * Math.sqrt(b[1])).toFixed(5);
        temp = '';
    }if(flag === true){
        let w = document.getElementById('test').innerHTML;
        document.getElementById('test').innerHTML = Math.pow(10, w) * temp;
        temp = '';
        flag = false;
    }else if (!eq.includes('^') && flag !== true && !eq.includes('√')){
        document.getElementById('test').innerHTML = eval(eq)
    }
}

function rand(){
    document.getElementById('test').innerHTML  = Math.random().toFixed(5)
}

function percent(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = nmbr * 0.01;
}

function factorial(){
    let nmbr = document.getElementById('test').innerHTML;
    let start = 1;
    for (let i=nmbr;i>1;i--){
        start *= i;
    }
    document.getElementById('test').innerHTML = start;
}

function powten() {
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.pow(10, nmbr);
}

function powsqr(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.pow(nmbr, 2);
}

function powcube(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.pow(nmbr, 3);
}

function sin(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.sin(nmbr);
}

function cos(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.cos(nmbr);
}

function tan(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.tan(nmbr);
}

function sinh(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.sinh(nmbr);
}

function cosh(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.cosh(nmbr);
}

function tanh(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.tanh(nmbr);
}

function pi(){
    document.getElementById('test').innerHTML = 3.14;
}

function exp(){
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = Math.pow(2.7182818284, nmbr).toFixed(5)
}

function radius() {
    let nmbr = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = nmbr / (2 * 3.14);
}
function changeSign() {
    let nmbr = document.getElementById('test').innerHTML;
    let a = nmbr.split('')

    if (a[0] !== '-' && a[0] !== '+'){ // number
        a.unshift('-')
        return document.getElementById('test').innerHTML = a.join('');
    }
    if (a[0] === '-'){
        a[0] = '+';
        return document.getElementById('test').innerHTML = a.join('');
    }
    if (a[0] === '+'){
        a[0] = '-';
        return document.getElementById('test').innerHTML = a.join('');
    }
}

function ln(){
    document.getElementById('test').innerHTML = Math.log(document.getElementById('test').innerHTML).toFixed(8);
}

function log(){
    document.getElementById('test').innerHTML = Math.log10(document.getElementById('test').innerHTML).toFixed(8);
}

function ee(){
    temp =  document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML = '';
    flag = true;
    console.log(temp)
}

function divideByOne(){
    document.getElementById('test').innerHTML = 1 / document.getElementById('test').innerHTML;
}

function twoMultiplyBy(){
    document.getElementById('test').innerHTML = (2 * Math.sqrt(document.getElementById('test').innerHTML)).toFixed(8);;
}

function threeMultiplyBy(){
    document.getElementById('test').innerHTML = (3 * Math.sqrt(document.getElementById('test').innerHTML)).toFixed(8);;
}

function powNumb(){
    temp = document.getElementById('test').innerHTML;
    document.getElementById('test').innerHTML += '^'
}

function mClean(){
    m = '';
    document.getElementById('mNumber').innerHTML  = '';
}

function mPlus(){
    let nmbr = document.getElementById('test').innerHTML;
    let test =  document.getElementById('mNumber').innerHTML;

    if (!test.includes(nmbr)){
        m = '+' + nmbr;
        document.getElementById('mNumber').innerHTML  = '+' + nmbr;
        document.getElementById('test').innerHTML  = '';
    }
    if (test.includes('-')){
        m = '+' + nmbr;
        document.getElementById('mNumber').innerHTML  = '+' + nmbr;
        document.getElementById('test').innerHTML  = '';
    }
}

function mMinus(){
    let nmbr = document.getElementById('test').innerHTML;
    let test =  document.getElementById('mNumber').innerHTML;

    if (!test.includes(nmbr)){
        m = '-' + nmbr;
        document.getElementById('mNumber').innerHTML  = '-' + nmbr;
        document.getElementById('test').innerHTML  = '';
    }
    if (!test.includes('+')){
        m = '-' + nmbr;
        document.getElementById('mNumber').innerHTML  = '-' + nmbr;
        document.getElementById('test').innerHTML  = '';
    }
}

function mPush(){

    if(m !== ''){
        document.getElementById('test').innerHTML += m ;
    }
}


