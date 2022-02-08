const countCharacters = require('../countCharacters')

describe('Test countCharacters function', () => {

    test('Correct calculation test', () => {
        expect(countCharacters('sparrow')).toEqual({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
    })

    test('Correct calculation test-2', () => {
        expect(countCharacters('a 2ab !d')).toEqual({ '2': 1, a: 2, ' ': 2, b: 1, '!': 1, d: 1 });
    })

    test('test for an empty object', () => {
        expect(countCharacters('')).toEqual('nope');
    })

    test('test for wrong format', () => {
        expect(countCharacters(2312)).toEqual('nope');
    })

    test('Test for emptiness ', () => {
        expect(countCharacters()).toEqual('nope');
    })
})