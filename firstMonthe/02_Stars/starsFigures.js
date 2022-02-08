function square(){
    let str = '';
    let sqr = 7;
    let star = " * ";

    for (let i=0;i<sqr;i++){
        for (j=0;j<sqr;j++){
            str = str + star;
        }
        str = str + "\n";
    }
    return str;
}  //// 1

function emptSquare(){
let str = '';
let sqr = 8;
let star = ' * ';

for (let i=0;i<sqr;i++){
    for (let j=0;j<sqr;j++){
        if (i === 0 || i === sqr - 1){
            str = str + star;
        }else if (j === 0 || j === sqr - 1) {
            str = str + star;
        }else {
            str = str + "   ";
        }
    }
    str = str + "\n";
}

    return str;

} //// 2
/////лев верх
function emptTriangleLeftTop(){
let star = ' *';
let n = 8;
let str = '';

for (let i=8;i>=1;i--){
    for (let j=0;j<i;j++){
        if(i === n) {
            str = str + star;
        }else if(j == 0 || j == i-1){
            str = str + star;
        }else {
            str = str + "  ";
        }
    }
    str = str + "\n";
}
    return str;
} /// 3
/////лев низ
function emptTriangleLeftBottom() {

let star = ' *';
let trangl = 8;
let str = '';

for (let i=1;i<=trangl;i++){
    for (let j=0;j<i;j++){
        if(i === trangl) {
            str = str + star;
        }else if(j == 0 || j == i-1){
            str = str + star;
        }else {
            str = str + "  ";
        }
    }
    str = str + "\n";
}

    return str;

} /// 4
//// прав низ
function emptTriangleRightBottom(){
    let n = 8;
    let m = 1;
    let str = '';
    let star = ' *';

    for(let i=n;i>=1;i--) {
        for(let j=1;j<=i-1;j++)
        {
            str = str + "  ";
        }
        for(let k=1;k<=m;k++)
        {
            if(k==1 || k==m || m==n)
                str = str + star;
            else
                str = str + "  ";
        }
        str = str + "\n";
        m++;
    }
    return str;
} /// 5
/// прав верх
function emptTriangleRightTop(){
    let n = 8;
    let m = n;
    let star = ' *';
    let str = '';

    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<i;j++)
        {
            str = str + "  ";
        }
        for(let k=1;k<=m;k++)
        {
            if(i==1 || k==1 || k==m)
                str = str + star;
            else
                str = str + "  ";
        }
        m--;

        str = str + "\n";
    }
    return str;
} /// 6

function Xfigure(){

let n = 4;
let m = 2*n-1;
let str = '';
let star = '*';

    for(let i=1;i<=m;i++)
    {
        for(let j=1;j<=m;j++)
        {
            if(i==j || j==(m-i+1))
            {
                str = str + star;
            }
            else
            {
                str = str + "  ";
            }
        }
        str = str + "\n";
}

    return str;
} /// 7

function halfTriangle() {

    let str = '';
    let n = 7;
    let star = '*';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0) {
                str = str + '  ' + star;
            } else if ((i == j && i <= 3) || (i == (6 - j) && i < 3)) {
                str = str + '  ' + star;
            } else {
                str = str + '  ' + ' ';
            }
        }

        console.log(str);
        str = '';
    }
} /// 8

function halfTriangle() {

    let str = '';
    let n = 7;
    let star = '*';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 6) {
                str = str + '  ' + star;
            } else if ((j == i && i >= 3) || (i == (6 - j) && i > 3)) {
                str = str + '  ' + star;
            } else {
                str = str + '  ' + ' ';
            }
        }

        console.log(str);
        str = '';
    }
} //// 9

