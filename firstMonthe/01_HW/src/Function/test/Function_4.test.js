const distance = require('../Function_4');

describe('Test distance function', () => {

    test('Correct calculation test', () => {
        expect(distance(-1, 6, 3, 2)).toEqual(7.0710678118654755);
    })

    test('test for wrong format1', () => {
        expect(distance('-1', '6', '3', '2')).toEqual(false);
    })

    test('test for wrong format2', () => {
        expect(distance()).toEqual(false);
    })
})
