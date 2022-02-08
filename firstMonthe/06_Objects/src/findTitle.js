//3)    Принимая массив объектов и случайную строку. У объектов......
function findTitle(arr, word) {

    if (typeof arr !== 'object' || arr.length<0 || typeof word !== 'string' || word === ''){
        return false;
    }

    let rer = [];



    for (let i=0;i<arr.length;i++){
        if (arr[i].title !== undefined && arr[i].title.toUpperCase().indexOf(word) !== -1){
            rer.push(arr[i])
        }
    }
    return rer;
}

let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj doesnt have key title js'
}, {
    title: 'Js - is the best!'
}];


console.log(findTitle(arr, 'JS')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]*/

module.exports = { findTitle };
