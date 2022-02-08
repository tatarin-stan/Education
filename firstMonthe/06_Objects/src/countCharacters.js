//4. Принимая строку, ваша функция должна вернуть обьект,
// в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters(string) {

    if (typeof string !== 'string' || string === ''){
        return 'nope'
    }

    let obj = {};
    let arr = string.split('')

    for (let i = 0; i < string.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;

        }
        else {
            obj[arr[i]] = 1;

        }
    }
    return obj;
}

console.log(countCharacters('a 2ab !d'));

/*countCharacters(‘sparrow’) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
countCharacters(‘aabcddeffge’) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2,g: 1}
countCharacters(‘a 2ab !d’) // should return {a: 2, b:1, d:1, 2:1}*/

module.exports = countCharacters;