//4.    Напишите функцию кеш
let fet = [{a:5 , b: 6},
            {a:1 , b: 3},
             {a:2 , b: 4},
             {a:4 , b: 2},
             {a:3 , b: 1}];



function cache(arg1, arg2){
    let flag = true;

   if (typeof arg1 !== 'number' || typeof arg2 !== 'number' || arg1 === '' || arg2 === ''){
        return false
    }

    for (let i=0;i<fet.length;i++){
        if (arg1 === fet[i].a && arg2 === fet[i].b){
            flag = false;
        }
     }

    if (flag === true){
        fet.push({a:arg1,b:arg2})
    }
    return fet;
}

console.log(cache(5,6)); // add
console.log(cache(9,9)); // nope
console.log(cache(9,92)); // add
console.log(cache(9,92)); // nope

module.exports = cache;


